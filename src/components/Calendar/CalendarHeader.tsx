import React, { useEffect, useState } from 'react';
import {HeaderContent, HeaderWrapper, LeftArrow, RightArrow } from './Calendar.style';
import { getHeaderContent } from './utils';

interface CalendarHeaderProps {
    firstDayOfMonth: Date,
    onLastMonthClick: () => void,
    onNextMonthClick: () => void
}

function CalendarHeader({ firstDayOfMonth, onLastMonthClick, onNextMonthClick }: CalendarHeaderProps) {
  const [headerContent, setHeaderContent] = useState<string>('');

  const leftArrow: string = '<';
  const rightArrow: string = '>';

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
      <LeftArrow role="button" tabIndex={0} onClick={handleShowLastMonth}>
        {leftArrow}
      </LeftArrow>
      <HeaderContent>{headerContent}</HeaderContent>
      <RightArrow role="button" tabIndex={0} onClick={handleShowNextMonth}>
        {rightArrow}
      </RightArrow>
    </HeaderWrapper>
  );
}

export default CalendarHeader;

