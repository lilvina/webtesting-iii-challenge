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

  it('should display closed if prop is true', () => {
    const { getByText } = render(<Display closed={true}/>)

    expect(getByText(/closed/i))
  })

  it('should display lock if prop is true', () => {
    const { getByText } = render(<Display locked={true}/>)

    expect(getByText(/locked/i))
  })

  it('should display open if prop is false', () => {
    const { getByText } = render(<Display closed={false}/>)

    expect(getByText(/open/i))
  })

  it('should display unlock if prop is false', () => {
    const {getByText} = render(<Display locked={false}/>)
    expect(getByText(/unlocked/i))
  })
})
