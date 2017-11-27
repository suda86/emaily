import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const handleToken = token => {
  return function(dispatch) {
    axios
      .post('/api/stripe', token)
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const submitSurvey = (values, history) => {
  return dispatch => {
    axios.post('/api/surveys', values).then(res => {
      history.push('/surveys');
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
