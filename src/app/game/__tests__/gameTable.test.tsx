import React from 'react';

import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { GameTable } from '../gameTable';

describe('<GameTable />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders correctly and to match snapshot', () => {
    const gameMap: string[] = [];
    const tree = renderer.create(<GameTable isRunning gameMap={gameMap} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render empty state correctly', () => {
    const gameMap: string[] = [];
    const wrapper = mount(<GameTable isRunning={false} gameMap={gameMap} />);
    expect(wrapper.text().includes('')).toBe(true);
  });

  it('should find at least 1 square cell', () => {
    const gameMap: string[] = [
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
    ];
    const wrapper = mount(<GameTable isRunning gameMap={gameMap} />);
    const element = wrapper.find('square-1-1');
    expect(element).toBeTruthy();
  });
});
