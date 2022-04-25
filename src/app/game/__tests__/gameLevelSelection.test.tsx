import React from 'react';

import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import GameLevelSelection from '../gameLevelSelection';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<GameLevelSelection />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders correctly and to match snapshot', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
        level: 1,
      },
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <GameLevelSelection />
      </Provider>
    );
    expect(wrapper.text().includes('Level')).toBe(true);
  });
});
