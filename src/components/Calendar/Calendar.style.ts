import styled from 'styled-components';
import styles from '../../styles/variables';

export const HeaderWrapper = styled.header`
  margin: 0;
  padding: .5em;
  border: 1px solid ${styles.primaryBackgroundColorLight};
  color: ${styles.primaryFontColor};
  text-align: center;
`;

export const LeftArrow = styled.span`
  margin-right: 2em;
  color: ${styles.primaryBackgroundColor};
  font-weight: bold;
  cursor: pointer;
`;

export const RightArrow = styled.span`
  margin-left: 2em;
  color: ${styles.primaryBackgroundColor};
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderContent = styled.span`
  padding: .5em;
  color: ${styles.primaryFontColor};
  font-size: 1em;
`;

export const BodyWrapper = styled.section`
  margin: 0;
  padding: 0;
  border-left: 1px solid ${styles.primaryBackgroundColorLight};
  text-align: center;
  font-size: .8em;
`;

export const WeekLabel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const WeekLabelItem = styled.div`
  flex: 1;
  padding: .5em;
  border-right:  1px solid ${styles.primaryBackgroundColorLight};
  border-bottom: 1px solid ${styles.primaryBackgroundColorLight};
  color: ${styles.primaryFontColor};
`;

export const WeekList = styled.div`
  display: block;
`;

export const DaysInWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
`;

export const DayItemBox = styled('div')<{isCurrentMonth: boolean, isCurrentDay: boolean, isCheckedDay: boolean}>`
  flex: 1;
  padding: .5em;
  border-right:  1px solid ${styles.primaryBackgroundColorLight};
  border-bottom: 1px solid ${styles.primaryBackgroundColorLight};
  ${(props) => {
      if (props.isCurrentMonth && !props.isCheckedDay && !props.isCurrentDay){
        return `
          background: white;
          color: ${styles.primaryBackgroundColor};
        `; 
      }else if(props.isCheckedDay){
        return `
          background: ${styles.primaryBackgroundColor};
          color: white;
        `;
      }else if(props.isCurrentDay){
        return `
          background: white;
          color: ${styles.primaryBackgroundColor};
          font-weight: bold;
        `;
      }else{
        return `
          background: ${styles.defaultBackgroundColor};
          color: #444;
        `;
      }
  }}
`;