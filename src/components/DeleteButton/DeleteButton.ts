import styled from 'styled-components';

export const DeleteButton = styled('button')<{primary: boolean}>`
    background: ${(props) => (props.primary ? '#d84949' : 'transparent')};
    color:  ${(props) => (props.primary ? 'white' : '#d84949')};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid lightcoral;
    border-radius: 3px;
`;
