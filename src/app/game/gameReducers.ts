import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

function convertMapPayload(payload: string): string[] {
  const rowList = payload.split('map:')[1].split('\n');
  return rowList.filter((item: string) => !!item.length);
}

interface GameState {
  map: string[];
  message: string;
  level: number;
}

const initialState: GameState = {
  map: [],
  message: '',
  level: 1,
};

export const initializeGame = createAction('startWatchingChannel');

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createNewGame(state) {
      state.level = 1;
      state.message = '';
      state.map = [];
    },
    setMap(state, action) {
      state.map = convertMapPayload(action.payload);
    },
    setLevel(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMap, setLevel, updateMessage, createNewGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
