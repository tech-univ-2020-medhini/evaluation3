import React from 'react';
import { render } from '@testing-library/react';
import GenreCard from './index';


describe('the genre cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GenreCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
