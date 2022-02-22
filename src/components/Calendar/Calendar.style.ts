import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 0;
  padding: .5em;
  border: 1px solid #fdb0c9;
  color: #333;
  text-align: center;
`;

export const LeftArrow = styled.span`
  margin-right: 2em;
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
`;

export const RightArrow = styled.span`
  margin-left: 2em;
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderContent = styled.span`
  padding: .5em;
  font-size: 1em;
  color: #333;
`;

export const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
  border-left: 1px solid #fdb0c9;
  font-size: .8em;
  text-align: center;
`;

export const WeekLabel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    padding: .5em;
    flex: 1;
    border-right:  1px solid #fdb0c9;
    border-bottom: 1px solid #fdb0c9;
    color: #333;
  }
`;

export const WeekList = styled.div`
  display: block;
`;

export const DaysInWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;

  div {
    padding: .5em;
    flex: 1;
    border-right:  1px solid #fdb0c9;
    border-bottom: 1px solid #fdb0c9;
    color: #888;
    background: #e8e8e8;
  }
  
  .current-month {
    color: #444;
    background: white;
  }
  
  .current-day {
    color: palevioletred;
    background: white;
    font-weight: bold;
  }

  .checked-day {
    color: white;
    background: palevioletred;
  }
`;
