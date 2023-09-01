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

interface ButtonProps {
    color?: string;
}
export const ToggleViewButton = styled.button<ButtonProps>`
  color: ${p => p.color};
`;