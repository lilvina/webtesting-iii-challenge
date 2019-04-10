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


})
