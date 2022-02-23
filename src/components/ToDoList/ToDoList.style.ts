import styled from 'styled-components';
import styles from '../../styles/variables';

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${styles.primaryBackgroundColor};
    margin: 1.5em;
`;

export const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip;
    text-align: center;
    height: 100vh;
    overflow-y: scroll;
`;

export const ToDoListBox = styled.ul`
    list-style-type: none;  
    padding: .5em;
`;
