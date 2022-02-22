import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { getFirstDayOfLastMonth, getFirstDayOfMonth, getFirstDayOfNextMonth } from './utils';

interface CalendarProps {
    checkedDate: Date,
    onAddDateChecked: () => Date
}

function Calendar({ checkedDate, onAddDateChecked }: CalendarProps) {
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(new Date()));

  const onLastMonthClick = () => {
    const firstDayOfLastMonth = getFirstDayOfLastMonth(firstDayOfMonth);
    setFirstDayOfMonth(firstDayOfLastMonth);
  };

  const onNextMonthClick = () => {
    const firstDayOfNextMonth = getFirstDayOfNextMonth(firstDayOfMonth);
    setFirstDayOfMonth(firstDayOfNextMonth);
  };

  return (
    <div>
      <CalendarHeader
        firstDayOfMonth={firstDayOfMonth}
        onLastMonthClick={onLastMonthClick}
        onNextMonthClick={onNextMonthClick}
      />
      <CalendarBody
        firstDayOfMonth={firstDayOfMonth}
        checkedDate={checkedDate}
        onAddDateChecked={onAddDateChecked}
      />
    </div>
  );
}

export default Calendar;

