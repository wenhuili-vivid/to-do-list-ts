import styled from 'styled-components';
import styles from '../../styles/variables';

export const ToDoItemBox = styled.li`
  padding: .5em;
`;

export const CheckBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: auto .5em 1.2em;
`;

export const CheckInput = styled.input.attrs({ type: "checkbox" })``;

export const ToDoItemContent = styled.div`
  display: inline-block;
  padding: .5em;
  border-bottom: ${styles.underline};
`;

export const DescriptionInput = styled.input.attrs({ type: "text" })`
  padding: .25em .5em;
  border: none;
  width: 300px;
  background: transparent;
  color: ${styles.primaryFontColor};
  font-size: 1.2em;
  
  :focus {
    outline: none;
  }

  :disabled {
    text-decoration: line-through;
    color: gray;
  }
`;

export const DateInput = styled.input.attrs({ type: "text" })`
  display: block;
  padding: .5em 1em;
  margin-left: 1em;
  border: none;
  border-radius: ${styles.defaultRadius};
  width: 100px;
  background: ${styles.modalBackground};
  color: ${styles.primaryFontColor};
  font-size: .7em;

  :focus {
    outline: none;
  }
  
  :disabled {
    text-decoration: line-through;
    color: gray;
  }
`;