// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library';

import Dashboard from './Dashboard.js';
import Display from '../display/Display.js';

describe('<Dashboard />', () => {
  it('renders successfully', () => {
    render(<Dashboard />)
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  describe('Gate', () => {
    it('should render unlocked', () => {
      const { getByText } = render(<Display />)
      getByText(/unlocked/i)
    })

    it('should render open', () => {
      const { getByText } = render(<Display />)
      getByText(/open/i)
    })
  })
})
