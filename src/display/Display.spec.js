// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library';

import Display from './Display.js';

describe('<Display />', () => {
  it('should render without crashing', () => {
    render(<Display />)
  })
})
