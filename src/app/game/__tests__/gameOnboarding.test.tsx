import React from 'react';

import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import GameOnboarding from '../gameOnboarding';

describe('<GameOnboarding />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders correctly and to match snapshot', () => {
    const tree = renderer.create(<GameOnboarding />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
