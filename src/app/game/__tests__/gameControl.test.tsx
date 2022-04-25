import React from 'react';

import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import GameControl from '../gameControl';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<GameControl />', () => {
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
        <GameControl />
      </Provider>
    );
    expect(wrapper.text().includes('Level')).toBe(true);
    expect(wrapper.text().includes('Start')).toBe(true);
  });
});
