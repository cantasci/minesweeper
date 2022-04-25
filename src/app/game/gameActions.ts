import { eventChannel } from 'redux-saga';
import { take, put, call, apply, fork } from 'redux-saga/effects';

import { GameClient, Socket } from './gameClient';
import { createNewGame, setMap, updateMessage } from './gameReducers';

function createSocketChannel(socket: Socket) {
  return eventChannel((emit) => {
    const handleOnMessage = (event: MessageEvent) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: Event) => {
      emit(new Error(errorEvent?.type || 'UKNOWN'));
    };

    socket.addEventListener('message', handleOnMessage);
    socket.addEventListener('error', errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener('message', handleOnMessage);
    };

    return unsubscribe;
  });
}

function* getMap(socket: Socket) {
  yield apply(socket, socket.send, ['map']);
}

export function createGame(payload: string) {
  GameClient.socket.send(payload);
}

export function* watchOnGame(): any {
  const socket = yield call(GameClient.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const data = yield take(socketChannel);
      if (data.includes('map:')) {
        yield put(setMap(data));
      }
      if (data.includes('new:')) {
        yield put(createNewGame());
        yield fork(getMap, socket);
      }
      if (data.includes('open:')) {
        yield put(updateMessage(data.split('open: ')[1]));
        yield fork(getMap, socket);
      }
    } catch (err) {
      socketChannel.close();
    }
  }
}
