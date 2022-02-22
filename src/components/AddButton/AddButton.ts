import styled from 'styled-components';
import styles from '../../styles/variables';

const AddButton = styled('button')<{primary: boolean}>`
  background: ${(props) => (props.primary ? styles.backgroundColor : 'white')};
  color:  ${(props) => (props.primary ? 'white' : styles.backgroundColor)};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${styles.backgroundColor};
  border-radius: 3px;

  :disabled {
    background: ${(props) => (props.primary ? '#e0a3b7' : 'white')};
    color:  ${(props) => (props.primary ? 'white' : '#e0a3b7')};
    border: 1px solid #e0a3b7;
  }
`;

export default AddButton;
