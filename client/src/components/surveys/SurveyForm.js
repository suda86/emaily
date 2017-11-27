import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/emailsValidation';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <Field
            type="text"
            name="title"
            component={SurveyField}
            label="Survey Title"
          />
          <Field
            type="text"
            name="subject"
            component={SurveyField}
            label="Subject Line"
          />
          <Field
            type="text"
            name="body"
            component={SurveyField}
            label="Email Body"
          />
          <Field
            type="text"
            name="recipients"
            component={SurveyField}
            label="Recipient List"
          />
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  if (!values.title) {
    errors.title = 'You must provide title';
  }
  if (!values.body) {
    errors.body = 'You must provide body';
  }
  if (!values.subject) {
    errors.subject = 'You must provide subjest';
  }
  if (!values.recipients) {
    errors.recipients = 'You must provide subjest';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
