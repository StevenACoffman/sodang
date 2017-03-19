import React, {PropTypes} from "react";
import { Field, reduxForm } from "redux-form";
import {TEAMS} from "../data";
import SelectFormGroup from "./Select";
import SliderFormGroup from "./Slider";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";

const SimpleForm = (props) => {
    //Caution: handleSubmit is redux-form wrapped version of parent passed onSubmit prop
    const { handleSubmit, pristine} = props;
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Show and Tell Feedback</legend>
                    <Divider/>
                    <div>
                        <Field label="Team" name="team" defaultValue="" role="button" tabIndex="0" required="true" options={TEAMS} component={SelectFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="Relevance" name="relevance" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="Excitement" name="excitement" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Field type="range" label="Succinctness" name="succinctness" min="0" max="100" tabIndex="0" component={SliderFormGroup}/>
                    </div>
                    <div>
                        <Button type="submit" role="button" name="something" value="Submit" tabIndex="0" disabled={pristine}>Submit</Button>
                    </div>
                </fieldset>
            </form>
        </Card>
    );
};

SimpleForm.propTypes = {
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: "simple",  // a unique identifier for this form
    initialValues: { specialness: 50, awesomeSauce: 50, shortness: 50 }
})(SimpleForm);
