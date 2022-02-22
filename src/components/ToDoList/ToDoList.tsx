import React, { useEffect, useState } from 'react';
import update from 'immutability-helper';
import ToDoItem from '../ToDoItem/ToDoItem';
import { AddButton } from '../AddButton/AddButton';
import { Wrapper, Title, ToDoListBox } from './ToDoList.style';
import Modal from '../Modal/Modal';
import Calendar from '../Calendar/Calendar';
import { dateFormat } from '../Calendar/utils';
import { getMyToDoList, setMyToDoList } from '../../store/myToDoList';

function ToDoList() {
  const [toDoItems, setToDoItems] = useState<[]>(getMyToDoList());
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentCheckedDate, setCurrentCheckedDate] = useState(new Date());
  const [operatingToDoItemIndex, setOperatingToDoItemIndex] = useState(0);
  const [modalPositionTop, setModalPositionTop] = useState('0px');
  const [modalPositionLeft, setModalPositionLeft] = useState('0px');

  useEffect(() => {
    setMyToDoList(toDoItems);
  }, [toDoItems]);

  const getAddHandler = () => {
    setToDoItems(update(toDoItems, { $unshift: [{ isFinished: false, description: '', deadline: '' }] }));
  };

  const getDescriptionChangeHandler = (index, description) => {
    setToDoItems(update(toDoItems, { [index]: { description: { $set: description } } }));
  };

  const getStatusChangeHandler = (index, isFinished) => {
    setToDoItems(update(toDoItems, { [index]: { isFinished: { $set: isFinished } } }));
  };

  const getAddDateFocusHandler = (index) => {
    const { deadline } = toDoItems[index];
    setCurrentCheckedDate(new Date(deadline));
    const element = document.getElementsByTagName('li')[index].children[1];
    setModalPositionTop(`${element.offsetTop + element.offsetHeight}px`);
    setModalPositionLeft(`${element.offsetLeft}px`);
    setIsShowModal(true);
    setOperatingToDoItemIndex(index);
  };

  const getAddDateCheckedHandler = (deadline: Date) => {
    setIsShowModal(false);
    setCurrentCheckedDate(deadline);
    setToDoItems(update(toDoItems, {
      [operatingToDoItemIndex]: { deadline: { $set: dateFormat(deadline, 'yyyy-MM-dd') } },
    }));
  };

  const getAddDateCloseHandler = () => {
    setIsShowModal(false);
  };

  const getDeleteHandler = (index: number) => {
    setToDoItems(update(toDoItems, { $splice: [[index, 1]] }));
  };

  const renderToDoItem = (item: [], index: React.Key ) => (
    <ToDoItem
      key={index}
      item={item}
      onDescriptionChange={(description: any) => getDescriptionChangeHandler(index, description)}
      onStatusChange={(isFinished: any) => getStatusChangeHandler(index, isFinished)}
      onAddDateFocus={() => getAddDateFocusHandler(index)}
      onDelete={() => (getDeleteHandler(index))}
    />
  );

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddButton onClick={getAddHandler} primary disabled={false}>+ Create</AddButton>
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
