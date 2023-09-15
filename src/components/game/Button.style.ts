import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #6f9ccc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
export const CustomButton = styled(Button)`
  font-size: 15px;
  margin: 10px;
`

export const DisabledDiv = styled.div`
  color: white;
`