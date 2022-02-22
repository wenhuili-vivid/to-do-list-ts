import React, { useEffect, useState } from 'react';
import { getHeaderContent } from './utils';
import {HeaderContent, HeaderWrapper, LeftArrow, RightArrow } from './Calendar.style';

interface CalendarHeaderProps {
    firstDayOfMonth: Date,
    onLastMonthClick: () => void,
    onNextMonthClick: () => void
}

function CalendarHeader({ firstDayOfMonth, onLastMonthClick, onNextMonthClick }: CalendarHeaderProps) {
  const [headerContent, setHeaderContent] = useState('');

  const leftArrow = '<';
  const rightArrow = '>';

  useEffect(() => {
    setHeaderContent(getHeaderContent(new Date(firstDayOfMonth)));
  }, [firstDayOfMonth]);

  const handleShowLastMonth = () => {
    onLastMonthClick();
  };

  const handleShowNextMonth = () => {
    onNextMonthClick();
  };

  return (
    <HeaderWrapper>
      <LeftArrow onClick={handleShowLastMonth}>
        {leftArrow}
      </LeftArrow>
      <HeaderContent>{headerContent}</HeaderContent>
      <RightArrow onClick={handleShowNextMonth}>
        {rightArrow}
      </RightArrow>
    </HeaderWrapper>
  );
}

export default CalendarHeader;

