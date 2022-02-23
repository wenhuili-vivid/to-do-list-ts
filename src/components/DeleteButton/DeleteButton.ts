import styled from 'styled-components';
import styles from '../../styles/variables';

export const DeleteButton = styled('button')<{primary: boolean}>`
    background: ${(props) => (props.primary ? styles.dangerBackgroundColor : 'transparent')};
    color:  ${(props) => (props.primary ? styles.primaryColor : styles.dangerBackgroundColor)};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid ${styles.dangerBackgroundColorLight};
    border-radius: ${styles.buttonRadius};
`;
