import { takeEvery, effects, delay } from 'redux-saga';
import { PUSH_STATE, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';


function* login(action) {
  yield effects.put({ type: LOGIN_SUCCESS, user: {} });
  yield effects.call(delay, 500);
  yield effects.put({ type: PUSH_STATE, data: action.data.path || '/home' });
}

export const authSagas = [
  takeEvery(LOGIN_REQUEST, login),
];
