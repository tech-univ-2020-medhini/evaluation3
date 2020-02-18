import React from 'react';
import { render } from '@testing-library/react';
import SongCard from './index';


describe('the song cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SongCard artists={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
