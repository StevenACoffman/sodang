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
        <Field ariaLabel="Team" role="button" name="favoriteTeam" tabIndex="1"  options={TEAMS} component={SelectFormGroup}/>
      </div>
      <div>
        <Field type="range" name="specialness" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="2" component={Slider}/>
      </div>
      <div>
        <Field type="range" name="awesomeSauce" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="3" component={Slider}/>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
