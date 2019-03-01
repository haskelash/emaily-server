//SurveyForm shows a form for a user to add input
import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} label={label} type="text" name={name} component={SurveyField}/>
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  errors.emails = validateEmails(values.emails || '')

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
