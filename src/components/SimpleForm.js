import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TEAMS} from "../data";
import SelectFormGroup from './Select';
import Slider from './Slider';
import Button from './Button';
import Card from './Card';
import {Shake, ShakeSlow} from 'reshake'
import styled from 'styled-components';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <Field label="Team" defaultValue="" role="button" name="favoriteTeam" tabIndex="0" required="true" options={TEAMS} component={SelectFormGroup}/>
      </div>
      <div>
        <Field type="range" label="Specialness" name="specialness" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="0" component={Slider}/>
      </div>
      <div>
        <Field type="range" label="AwesomeSauce" name="awesomeSauce" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="0" component={Slider}/>
      </div>
      <div>
        <Field type="range" label="Shortness" name="shortness" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="0" component={Slider}/>
      </div>
      <div>
        <Button type="submit" role="button" name="something" value="Submit" tabIndex="0" disabled={pristine}>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
