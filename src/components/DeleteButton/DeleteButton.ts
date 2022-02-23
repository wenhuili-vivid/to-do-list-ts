import styled from 'styled-components';
import styles from '../../styles/variables';

export interface DeleteButtonProps {
    primary: boolean,
    children: string,
    onClick: () => void
}

export const DeleteButton = styled.button<DeleteButtonProps>`
    background: ${/*sc-value*/(props) => (props.primary ? styles.dangerBackgroundColor : 'transparent')};
    color:  ${/*sc-value*/(props) => (props.primary ? styles.primaryColor : styles.dangerBackgroundColor)};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid ${styles.dangerBackgroundColorLight};
    border-radius: ${styles.buttonRadius};
`;
