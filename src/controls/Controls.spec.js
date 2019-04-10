// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should render without crashing', () => {
    render(<Controls />)
  })

  it('should have buttons to toggle closed and locked states', () => {
    const { getByText } = render(<Controls />)
    getByText(/lock gate/i)
    getByText(/close gate/i)
  })

  

})
