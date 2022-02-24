import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import ToDoList from "./ToDoList";
import {fireEvent, getByText} from "@testing-library/react";

describe('ToDoList', () => {
    // it('renders an to do list', () => {
    //     render(<ToDoList />);
    //     expect(screen.findByLabelText('ul')).toBeInTheDocument();
    // });

    // it('renders an to do list',  async () => {
    //     const { result } = renderHook(() => ToDoList());
    //     console.log("rederlist6", result)
    //    // fireEvent.click(getByText('+ Create'))
    //     // act(() => {
    //     //     result.current.getAddHandler();
    //     // })
    //     expect(result.current).toBe(0)
    //     expect(typeof result.current.getAddHandler).toBe('function')
    // });
});
