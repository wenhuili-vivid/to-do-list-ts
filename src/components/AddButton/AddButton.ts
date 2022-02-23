import styled from 'styled-components';
import styles from '../../styles/variables';

export const AddButton = styled('button')<{primary: boolean}>`
  background: ${(props) => (props.primary ? styles.primaryBackgroundColor : styles.primaryColor)};
  color:  ${(props) => (props.primary ? styles.primaryColor : styles.primaryBackgroundColor)};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${styles.primaryBackgroundColor};
  border-radius: 3px;

  :disabled {
    background: ${(props) => (props.primary ? styles.primaryBackgroundColorLight : styles.primaryColor)};
    color:  ${(props) => (props.primary ? styles.primaryColor : styles.primaryBackgroundColorLight)};
    border: 1px solid ${styles.primaryBackgroundColorLight};
  }
`;