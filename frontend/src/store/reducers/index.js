import { combineReducers } from 'redux';

import auth from './auth';
import todos from './todos';
import { LOGOUT_SUCCESS } from '../actions/types';

const appReducer = combineReducers({
  auth,
  todos,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
