import styled from 'styled-components';
import styles from '../../styles/variables';

export const ModalBox = styled.div`
  position: absolute;
  top: 30%;
  right: 30%;
  box-shadow: ${styles.modalBoxShadow};
  border-radius: ${styles.defaultRadius};
  padding: .5em;
  text-align: center;
  background: ${styles.modalBackground};
`;

export const CloseButton = styled('button')<{primary: boolean}>`
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${styles.dangerBackgroundColorLight};
  border-radius: ${styles.buttonRadius};
  background: ${(props) => (props.primary ? styles.dangerBackgroundColor : 'transparent')};
  color:  ${(props) => (props.primary ? styles.primaryColor : styles.defaultBackgroundColor)};
  font-size: .8em;
`;
