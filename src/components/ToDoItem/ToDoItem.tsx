import React from 'react';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { CheckBox, CheckInput, DateInput, DescriptionInput, ToDoItemBox, ToDoItemContent } from './ToDoItem.style';


function ToDoItem({ ...props }) {
  const handleCheckboxChange = (e: { target: { checked: any; }; }) => {
    props.onStatusChange(e.target.checked);
  };

  const handleDescriptionChange = (e: { target: { value: any; }; }) => {
    props.onDescriptionChange(e.target.value);
  };

  const handleAddDateFocus = () => {
    props.onAddDateFocus();
  };

  const handleDeleteButtonClick = () => {
    props.onDelete();
  };

  const { item: { description, isFinished, deadline } } = props;
  return (
    <ToDoItemBox>
      <CheckBox>
        <CheckInput checked={isFinished} onChange={handleCheckboxChange} />
      </CheckBox>
      <ToDoItemContent>
        <DescriptionInput type="text" placeholder="Please input your todo" value={description} onChange={handleDescriptionChange} disabled={isFinished} />
        <DateInput type="text" placeholder="Add Date" value={deadline} onFocus={handleAddDateFocus} readOnly />
      </ToDoItemContent>
      <DeleteButton onClick={handleDeleteButtonClick} primary={false}>Delete</DeleteButton>
    </ToDoItemBox>
  );
}

export default ToDoItem;

