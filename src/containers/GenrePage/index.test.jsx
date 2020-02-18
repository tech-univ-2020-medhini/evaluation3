import React from 'react';
import { render } from '@testing-library/react';
import GenrePage from './index';


describe('the genre page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GenrePage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
