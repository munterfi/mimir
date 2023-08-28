import styled from 'styled-components';

const Button = styled.button` 
  border: none; 
  background: darkcyan; 
  color: white;

  &:hover {
    background: aqua; 
    color: black;   
  }
`
export const CustomButton = styled(Button)` 
  font-size: 15px;
`

export const ToggleViewButton = styled.button`

  background: #ffffff;
  color: #0d178c;
  width: 100%;
  border: 1px solid #0d178c;

  .edit {

  }

  .delete {

  }

  .add {

  }

  .switch_view {
    background-color: #d91818;
    color: blue;
  }

  .default {

  }
`;