import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';


describe('the homepage container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
