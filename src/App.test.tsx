import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a to do list', () => {
  render(<App />);
  const title = screen.getByText(/To Do List/i);
  expect(title).toBeInTheDocument();
});
