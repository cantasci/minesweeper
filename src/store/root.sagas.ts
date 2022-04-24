import { all } from 'redux-saga/effects';

import { watcherGameSaga } from '../app/game/gameSaga';

export default function* rootSaga() {
  yield all([watcherGameSaga()]);
}
