import React from 'react';

import { cleanup, render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import App from '../app';
import { watcherGameSaga } from '../game/gameSaga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<App />', () => {
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
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Start button appears in first render', () => {
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
        <App />
      </Provider>
    );
    expect(wrapper.text().includes('Minesweeper')).toBe(true);
    expect(wrapper.text().includes('Press START to play Minesweeper!')).toBe(true);
    expect(wrapper.text().includes('Start')).toBe(true);
  });
  it('Start button appears in first render', async () => {
    const initialState = {
      game: {
        map: [
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
        ],
        message: '',
        level: 1,
      },
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(watcherGameSaga);

    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.getByText('Restart')).toBeTruthy();
  });
});
