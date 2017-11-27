import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReview: false
    };
  }

  render() {
    return (
      <div>
        {this.state.showReview ? (
          <SurveyFormReview
            onCancel={() => this.setState({ showReview: false })}
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showReview: true })}
          />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
