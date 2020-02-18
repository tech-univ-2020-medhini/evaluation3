import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreCard from './index';


describe('the genre cards', (w) => {
  it('should render correctly', () => {
    const { asFragment } = render(<GenreCard />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should call get songs when the button is clicked', () => {
    const mockGetSongs = jest.fn();
    const { getByTestId } = render(<GenreCard getSongs={mockGetSongs} />);
    fireEvent.click(getByTestId('test-btn'));
    expect(mockGetSongs).toHaveBeenCalled();
  });
});
