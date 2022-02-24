import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import ToDoItem from "./ToDoItem";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('ToDoItem', () => {
    it('renders an to do item', () => {
        const item = {
            description: 'To Do Item',
            isFinished: true,
            deadline: '2022-02-13'
        }
        const onDescriptionChange = jest.fn();

        render(<ToDoItem item={item}  onAddDateFocus={jest.fn()} onDelete={jest.fn()} onDescriptionChange={onDescriptionChange} onStatusChange={jest.fn()}/>);

        userEvent.type(screen.getByPlaceholderText(/todo/i), 'JavaScript');
        expect(onDescriptionChange).toHaveBeenCalledTimes(0);
    });
});
