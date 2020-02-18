import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import HomePage from './index';


describe('the homepage container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should make an api call when the button is clicked', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { data: { } } });
    // eslint-disable-next-line max-len
    const { getByTestId } = render(<HomePage setIsSyncClicked={() => {}} setSongsList={() => {}} />);

    fireEvent.click(getByTestId('test-btn'));

    expect(mockAxios).toHaveBeenCalled();
  });
});
