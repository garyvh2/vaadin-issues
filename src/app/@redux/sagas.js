import { effects } from 'redux-saga';
import { authSagas } from './routes/sagas';

export function* rootSaga() {
  yield effects.all([
    ...authSagas,
  ]);
}
