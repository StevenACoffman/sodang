import React from "react";
import styled from "styled-components";
import ControlLabel from "./ControlLabel";

const Slider = styled.input`
-webkit-appearance: none;
width: 100%;
margin: 18px 0;
&::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  -o-transition: background-color 0.2s;
  transition: background-color 0.2s;
  border: 0px;
  -webkit-appearance: none; }
&::-moz-range-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  border: 0px;
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  -o-transition: background-color 0.2s;
  transition: background-color 0.2s; }
&::-ms-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animate: 0.2s;
  border-width: 2px 0;
  border-color: transparent;
  color: transparent;
  background: transparent;
  -webkit-transition: background-color 0.2s;
  -moz-transition: background-color 0.2s;
  -o-transition: background-color 0.2s;
  transition: background-color 0.2s; }
&::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb;
  border-radius: 12px;
  cursor: pointer;
  margin-top: -5px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -webkit-appearance: none; }
&::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb;
  border-radius: 12px;
  cursor: pointer;
  margin-top: -5px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, border 0.2s; }
&::-ms-thumb {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb;
  border-radius: 12px;
  cursor: pointer;
  margin-top: -5px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -moz-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  -o-transition: background-color 0.2s, box-shadow 0.2s, border 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, border 0.2s; }
&:focus {
  outline: none; }
&:active::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
&:active::-moz-range-thumb {
  box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
&:active::-ms-thumb {
  box-shadow: 0px 0px 0px 14px rgba(255, 164, 65, 0.2); }
&:disabled::-webkit-slider-thumb {
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-top: -3px; }
&:disabled::-moz-range-thumb {
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-top: -3px; }
&:disabled::-ms-thumb {
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-top: -3px; }
&:disabled:active::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px 0px transparent; }
&:disabled:active::-moz-range-thumb {
  box-shadow: 0px 0px 0px 0px transparent; }
&:disabled:active::-ms-thumb {
  box-shadow: 0px 0px 0px 0px transparent; }
&::-webkit-slider-runnable-track {
  background-color: rgba(0, 0, 0, 0.26); }
&::-moz-range-track {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&::-ms-track, &::-ms-fill-lower, &::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&::-webkit-slider-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb; }
&::-moz-range-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb; }
&::-ms-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  background-color: #ebebeb; }
&:active::-webkit-slider-runnable-track {
  background-color: #2196F3; }
&:active::-moz-range-track {
  background: #2196F3;
  background-color: #2196F3; }
&:active::-ms-track, &:active::-ms-fill-lower, &:active::-ms-fill-upper {
  background: #2196F3;
  background-color: #2196F3; }
&:active::-webkit-slider-thumb {
  border: 4px solid #2196F3;
  background-color: #2196F3; }
&:active::-moz-range-thumb {
  border: 4px solid #2196F3;
  background-color: #2196F3; }
&:active::-ms-thumb {
  border: 4px solid #2196F3;
  background-color: #2196F3; }
&:disabled::-webkit-slider-runnable-track {
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled::-moz-range-track {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled::-ms-track, &:disabled::-ms-fill-lower, &:disabled::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled::-webkit-slider-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
&:disabled::-moz-range-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
&:disabled::-ms-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
&:disabled:active::-webkit-slider-runnable-track {
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled:active::-moz-range-track {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled:active::-ms-track, &:disabled:active::-ms-fill-lower, &:disabled:active::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.26); }
&:disabled:active::-webkit-slider-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
&:disabled:active::-moz-range-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
&:disabled:active::-ms-thumb {
  border: 2px solid rgba(0, 0, 0, 0.26);
  outline: 2px solid #ebebeb;
  background-color: #ebebeb; }
`;


const UnstyledSliderFormGroup = (props) => {
    const sliderId = "slider-"+(props.className || "no-class");
    return (
    <div className={props.className}>
        <ControlLabel htmlFor={sliderId} className={undefined}>{props.label || "Slider"}</ControlLabel>
        <Slider id={sliderId} key={sliderId} value={props.input.value} onChange={props.input.onChange} type="range" ariaLabel={props.label} {...props} className={undefined}/>
    </div>
)};

const SliderFormGroup = styled(UnstyledSliderFormGroup)`
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    box-sizing: border-box;
    &::after, $::before {
      box-sizing: border-box;
    }
`;

export default SliderFormGroup;
