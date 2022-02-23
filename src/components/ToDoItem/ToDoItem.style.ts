import styled from "styled-components";

export const ToDoItemBox = styled.li`
  padding: .5em;
`;

export const CheckBox = styled.div`
  margin: auto .5em 1.2em;
  display: inline-block;
  vertical-align: middle;
`;

export const CheckInput = styled.input.attrs({ type: "checkbox" })``;

export const ToDoItemContent = styled.div`
  padding: .5em;
  display: inline-block;
  border-bottom: 1px solid #cecece;
`;

export const DescriptionInput = styled.input`
  padding: .25em .5em;
  border: none;
  background: transparent;
  font-size: 1.2em;
  color: ${(props) => (props.disabled ? 'gray' : '#282c34')};
  width: 300px;
  
  :focus {
    outline: none;
  }

  :disabled {
    text-decoration: line-through;
  }
`;

export const DateInput = styled.input`
  display: block;
  padding: .5em 1em;
  margin-left: 1em;
  border: none;
  background: #f8f8f8;
  font-size: .7em;
  color: ${(props) => (props.disabled ? 'gray' : '#282c34')};
  width: 100px;
  border-radius: .5em;

  :focus {
    outline: none;
  }

  :disabled {
    text-decoration: line-through;
  }
`;