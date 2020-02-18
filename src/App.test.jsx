import React from 'react';
import { render } from '@testing-library/react';
import App from './App.jsx';


describe('the app page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
