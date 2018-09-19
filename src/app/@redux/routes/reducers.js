/**
 * Action Types
 */
import { Map, fromJS } from 'immutable';
import { CHANGE_LOCATION, LOGIN_SUCCESS } from './types';


const getInitialState = Map(fromJS({
  pathname: '/',
  search: '',
  queries: {},
  hash: '',
}));

export const routerReducer = (state = getInitialState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return state.merge(state, fromJS(action.data));
    default:
      return state;
  }
};

export const authReducer = (state = Map({}), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', fromJS(action.data));
    default:
      return state;
  }
};
