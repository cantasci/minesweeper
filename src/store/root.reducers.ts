import { combineReducers } from '@reduxjs/toolkit';

import { gameReducer } from '../app/game/gameReducers';

const reducers = {
  game: gameReducer,
};

export const rootReducer = combineReducers(reducers);
