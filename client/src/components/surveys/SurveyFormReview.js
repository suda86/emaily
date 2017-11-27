import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <div>
        <label>Survey title</label>
        <div>{formValues.title}</div>
      </div>
      <div>
        <label>Survey subject</label>
        <div>{formValues.subject}</div>
      </div>
      <div>
        <label>Survey body</label>
        <div>{formValues.body}</div>
      </div>
      <div>
        <label>Survey recipients</label>
        <div>{formValues.recipients}</div>
      </div>
      <button onClick={onCancel} className="yellow darken-3 btn-flat">
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
