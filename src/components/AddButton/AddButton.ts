import styled from 'styled-components';
import styles from '../../styles/variables';

export interface AddButtonProps {
    primary: boolean,
    disabled: boolean,
    children: string,
    onClick: () => void
}

export const AddButton = styled.button<AddButtonProps>`
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${styles.primaryBackgroundColor};
  border-radius: ${styles.buttonRadius};
  background: ${/*sc-value*/(props) => (props.primary ? styles.primaryBackgroundColor : styles.primaryColor)};
  color:  ${/*sc-value*/(props) => (props.primary ? styles.primaryColor : styles.primaryBackgroundColor)};
  font-size: 1em;

  :disabled {
    border: 1px solid ${styles.primaryBackgroundColorLight};
    background: ${/*sc-value*/(props) => (props.primary ? styles.primaryBackgroundColorLight : styles.primaryColor)};
    color:  ${/*sc-value*/(props) => (props.primary ? styles.primaryColor : styles.primaryBackgroundColorLight)};
  }
`;