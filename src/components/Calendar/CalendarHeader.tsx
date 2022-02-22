import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getHeaderContent } from './utils';
import {HeaderContent, HeaderWrapper, LeftArrow, RightArrow } from './Calendar.style';

function CalendarHeader({ firstDayOfMonth, onLastMonthClick, onNextMonthClick }) {
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

CalendarHeader.propsTpye = {
  firstDayOfMonth: PropTypes.instanceOf(Date).isRequired,
  onLastMonthClick: PropTypes.func.isRequired,
  onNextMonthClick: PropTypes.func.isRequired,
};
