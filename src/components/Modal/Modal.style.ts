import styled from "styled-components";
import styles from "../../styles/variables";

export const ModalBox = styled.div`
  padding: .5em;
  border-radius: .5rem;
  box-shadow: 1px 4px 4px #f1dddd;
  text-align: center;
  background: #fffdfd;
  position: absolute;
  top: 30%;
  right: 30%;
`;

export const CloseButton = styled('button')<{primary: boolean}>`
  background: ${(props) => (props.primary ? styles.defaultBackgroundColor : 'transparent')};
  color:  ${(props) => (props.primary ? 'white' : styles.defaultBackgroundColor)};
  font-size: .8em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${styles.primaryBackgroundColorLight};
  border-radius: 3px;
`;
