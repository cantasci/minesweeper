import { takeLatest } from 'redux-saga/effects';

import { watchOnGame } from './gameActions';
import { initializeGame } from './gameReducers';

export function* watcherGameSaga() {
  yield takeLatest(initializeGame.type, watchOnGame);
}
