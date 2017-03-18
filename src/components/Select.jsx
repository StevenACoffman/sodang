import React, { PropTypes } from "react";
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
    const { input={}, className="", label="", role="", tabIndex=0, options=[]} = props;
    return (
        <select className={className} role={role} aria-label={label} tabIndex={tabIndex} {...input}>
            <option value="" disabled hidden>Select a {label}...</option>
            {options.map(currentOption => <option value={currentOption.value} key={currentOption.value}>{currentOption.label}</option>)}
        </select>
    );
};
UnstyledSelect.propTypes = {
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    })),
    onChange: PropTypes.func.isRequired
};

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
    const selectId = "select-"+(props.className || "no-class");
    return(
        <div className={props.className}>
            {props.children}
            <ControlLabel htmlFor={selectId} className={undefined}>{props.label || "SelectBox"}</ControlLabel>
            <Select key={selectId} id={selectId} label={props.label} {...props} className={undefined}/>
            <Bar/>
            {props.required && props.input && !props.input.value && <RequiredError>This field is required</RequiredError>}
        </div>
    );
};

UnstyledSelectFormGroup.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.shape({
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }).isRequired
};

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
