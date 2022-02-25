import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { screen, fireEvent, getByText, render } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe('ToDoList', () => {
    it('renders an empty to do list',() => {
        const { getByText } = render(<ToDoList />);

        expect(getByText('To Do List')).toBeInTheDocument();
        expect(getByText('+ Create')).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeEmptyDOMElement();
    });

    it('should add a to do item when create button clicked', () => {
        const { getByText } = render(<ToDoList />);

        fireEvent.click(getByText('+ Create'));
        fireEvent.click(getByText('+ Create'));
        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

});
