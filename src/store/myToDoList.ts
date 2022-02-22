const toDoListData = 'myToDoList';

export const getMyToDoList = () => (
    JSON.parse(window.localStorage.getItem(toDoListData) || '{}')
)

export const setMyToDoList = (myToDoList: string | null) => {
  window.localStorage.setItem(toDoListData, JSON.stringify(myToDoList));
};
