import React from "react";
import styled from "styled-components";
import ControlLabel from "./ControlLabel";

const Bar = styled.i`
    position: relative;
    border-bottom: 0.0625rem solid #999;
    display: block;
    &::before {
        content: '';
        height: 0.125rem;
        width: 0;
        left: 50%;
        bottom: -0.0625rem;
        position: absolute;
        background: #337ab7;
        -webkit-transition: left 0.28s ease, width 0.28s ease;
        transition: left 0.28s ease, width 0.28s ease;
        z-index: 2;
    }
`;

const UnstyledSelect = (props) => {
    const { input={}, className="", ariaLabel="", role="", tabIndex=0, options=[]} = props;
    return (
        <select className={className} role={role} aria-label={ariaLabel} tabIndex={tabIndex} {...input}>
            <option value="" disabled hidden>Select a {ariaLabel}...</option>
            {options.map(currentOption => <option value={currentOption.value} key={currentOption.value}>{currentOption.label}</option>)}
        </select>
    );};


const Select = styled(UnstyledSelect)`
font-family: 'Roboto', sans-serif;
box-sizing: border-box;
  &::after, $::before {
    box-sizing: border-box;
  }
  width: 100%;
  font-size: 1rem;
  height: 1.6rem;
  padding: 0.125rem 0.125rem 0.0625rem;
  background: none;
  border: none;
  line-height: 1.6;
  box-shadow: none;
  color: #333;
  &:focus {
    outline: none;
  }
`;

const RequiredError = styled.span`
position: absolute;
pointer-events: none;
padding-left: 0.125rem;
box-sizing: border-box;
z-index: 1;
color: #d32f2f;
font-size: 1rem;
font-weight: normal;
font-family: 'Roboto', sans-serif;
-webkit-transition: all 0.28s ease;
transition: all 0.28s ease;
font-size: 0.8rem;
left: 0;
&::after, $::before {
  box-sizing: border-box;
}
`;

const UnstyledSelectFormGroup = (props) => {
    console.error(props);
    return(
        <div className={props.className}>
            <ControlLabel htmlFor="select" className={undefined}>{props.label || "SelectBox"}</ControlLabel>
            <Select ariaLabel={props.label} {...props} className={undefined}/>
            <Bar/>
            {props.required && props.input && !props.input.value && <RequiredError>This field is required</RequiredError>}
        </div>
    );};

const SelectFormGroup = styled(UnstyledSelectFormGroup)`
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    box-sizing: border-box;
    &::after, $::before {
      box-sizing: border-box;
    }
`;

export default SelectFormGroup;
