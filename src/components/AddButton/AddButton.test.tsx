import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { AddButton } from './AddButton';

describe('AddButton', () => {
    it('renders an AddButton', () => {
        render(<AddButton primary={true} disabled={false}>AddButton</AddButton>);

        const buttonElement = screen.getByText(/AddButton/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call onClick callback if provided', () => {
        const onClickFunction = jest.fn();
        render(<AddButton primary={true} onClick={onClickFunction} disabled={false}>AddButton</AddButton>);

        const addButton = screen.getByText(/AddButton/i);
        fireEvent.click(addButton);
        expect(onClickFunction.mock.calls.length).toEqual(1);
    });
});
