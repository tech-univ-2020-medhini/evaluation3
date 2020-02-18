import React from 'react';
import {
  render, wait, fireEvent,
} from '@testing-library/react';
import axios from 'axios';
import SongCard from './index';


describe('the song cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SongCard artists={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
  xit('Should get the likes on the song on mount', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { data: { count: 1 } } });
    const { getByTestId } = render(<SongCard artists={[]} />);
    await wait(() => expect(getByTestId('test-btn')).toHaveTextContent(1));
  });
  it('Should update the value of likes when button is clicked', () => {
    const mockAxios = jest.spyOn(axios, 'patch');
    mockAxios.mockResolvedValue('');
    const { getByTestId } = render(<SongCard artists={[]} />);
    fireEvent.click(getByTestId('test-btn'));

    expect(mockAxios).toHaveBeenCalled();
    expect(getByTestId('test-btn')).toHaveTextContent(1);
  });
});
