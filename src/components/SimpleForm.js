import React from "react";
import { Field, reduxForm } from "redux-form";
import {TEAMS} from "../data";
import SelectFormGroup from "./Select";
import SliderFormGroup from "./Slider";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import {Shake, ShakeSlow} from "reshake";
import styled from "styled-components";


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let SimpleForm = (props) => {
    //Caution: handleSubmit is redux-form wrapped version of parent passed onSubmit prop
    const { handleSubmit, pristine, reset, submitting, dispatch} = props;
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Show and Tell Feedback</legend>
                    <div>
                        <Field label="Team" defaultValue="" role="button" name="favoriteTeam" tabIndex="0" required="true" options={TEAMS} component={SelectFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="Specialness" name="specialness" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="AwesomeSauce" name="awesomeSauce" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="Shortness" name="shortness" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Button type="submit" role="button" name="something" value="Submit" tabIndex="0" disabled={pristine}>Submit</Button>
                    </div>
                </fieldset>
            </form>
        </Card>
    );
};

export default reduxForm({
    form: "simple",  // a unique identifier for this form
    initialValues: { specialness: 50, awesomeSauce: 50, shortness: 50 },
    onSubmit: ()=> console.log("Yarr!")
})(SimpleForm);
