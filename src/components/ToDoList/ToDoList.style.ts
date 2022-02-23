import styled from 'styled-components';
import styles from '../../styles/variables';

export const Wrapper = styled.section`
  padding: 1em;
  text-align: center;
  height: 100vh;
  background: ${styles.pageBackgroundColor};
  overflow-y: scroll;
`;

export const Title = styled.h1`
  margin: 1.5em;
  text-align: center;
  color: ${styles.primaryBackgroundColor};
  font-size: 1.5em;
`;

export const ToDoListBox = styled.ul`
  padding: .5em;
  list-style-type: none;
`;
