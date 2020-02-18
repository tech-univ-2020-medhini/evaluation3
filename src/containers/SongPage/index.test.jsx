import React from 'react';
import { render } from '@testing-library/react';
import SongPage from './index';


describe('the songpage container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SongPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
