import React, { useEffect, useState } from 'react';
import update from 'immutability-helper';
import ToDoItem, {ToDoItems} from '../ToDoItem/ToDoItem';
import { AddButton } from '../AddButton/AddButton';
import { Wrapper, Title, ToDoListBox } from './ToDoList.style';
import Modal from '../Modal/Modal';
import Calendar from '../Calendar/Calendar';
import { dateFormat } from '../Calendar/utils';
import { getMyToDoList, setMyToDoList } from '../../store/myToDoList';

function ToDoList() {
  const [toDoItems, setToDoItems] = useState<ToDoItems[]>(getMyToDoList());
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [currentCheckedDate, setCurrentCheckedDate] = useState<Date>(new Date());
  const [operatingToDoItemIndex, setOperatingToDoItemIndex] = useState<number>(0);
  const [modalPositionTop, setModalPositionTop] = useState<string>('0px');
  const [modalPositionLeft, setModalPositionLeft] = useState<string>('0px');

  useEffect(() => {
    setMyToDoList(toDoItems);
  }, [toDoItems]);

  const getAddHandler = () => {
    setToDoItems(update(toDoItems, { $unshift: [{ isFinished: false, description: '', deadline: '' }] }));
  };

  const getDescriptionChangeHandler = (index: number, description: string) => {
    setToDoItems(update(toDoItems, { [index]: { description: { $set: description } } }));
  };

  const getStatusChangeHandler = (index: number, isFinished: boolean) => {
    setToDoItems(update(toDoItems, { [index]: { isFinished: { $set: isFinished } } }));
  };

  const getAddDateFocusHandler = (index: number) => {
    const { deadline } = toDoItems[index];
    setCurrentCheckedDate(new Date(deadline));
    const element: HTMLElement = document.getElementsByTagName('li')[index].children[1] as HTMLElement;
    setModalPositionTop(`${element.offsetTop + element.offsetHeight}px`);
    setModalPositionLeft(`${element.offsetLeft}px`);
    setIsShowModal(true);
    setOperatingToDoItemIndex(index);
  };

  const getAddDateCheckedHandler = (deadline: Date) => {
    setIsShowModal(false);
    setCurrentCheckedDate(deadline);
    setToDoItems(update(toDoItems, {
      [operatingToDoItemIndex]: { deadline: { $set: dateFormat(deadline, 'yyyy-MM-dd', '') } },
    }));
  };

  const getAddDateCloseHandler = () => {
    setIsShowModal(false);
  };

  const getDeleteHandler = (index: number) => {
    setToDoItems(update(toDoItems, { $splice: [[index, 1]] }));
  };

  const renderToDoItem = (item: ToDoItems, index: React.Key ) => (
    <ToDoItem
      key={index}
      item={item}
      onDescriptionChange={(description: string) => getDescriptionChangeHandler(index as number, description)}
      onStatusChange={(isFinished: boolean) => getStatusChangeHandler(index as number, isFinished)}
      onAddDateFocus={() => getAddDateFocusHandler(index as number)}
      onDelete={() => (getDeleteHandler(index as number))}
    />
  );

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddButton onClick={getAddHandler} primary={true} disabled={false}>+ Create</AddButton>
      <ToDoListBox>
        {
          toDoItems.map(renderToDoItem)
        }
      </ToDoListBox>
      <Modal
        onOpen={isShowModal}
        onClose={getAddDateCloseHandler}
        top={modalPositionTop}
        left={modalPositionLeft}
      >
        <Calendar checkedDate={currentCheckedDate} onAddDateChecked={getAddDateCheckedHandler} />
      </Modal>
    </Wrapper>
  );
}

export default ToDoList;
