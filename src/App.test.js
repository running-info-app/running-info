import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello runners text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello Runners!!!/);
  expect(textElement).toBeInTheDocument();
});