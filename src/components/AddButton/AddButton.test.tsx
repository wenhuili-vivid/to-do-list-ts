import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddButton } from './AddButton';

test('renders an Button', () => {
    render(<AddButton primary={true} onClick={() => {}} disabled={false}>AddButton</AddButton>);
    const buttonElement = screen.getByText(/AddButton/i);
    expect(buttonElement).toBeInTheDocument();
});
