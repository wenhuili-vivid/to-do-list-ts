import {ToDoItems} from "../components/ToDoItem/ToDoItem";

const toDoListData: string = 'myToDoList';

export const getMyToDoList = (): ToDoItems[] => (
    JSON.parse(window.localStorage.getItem(toDoListData) || '{}')
)

export const setMyToDoList = (myToDoList: ToDoItems[]): void => {
  window.localStorage.setItem(toDoListData, JSON.stringify(myToDoList));
};
