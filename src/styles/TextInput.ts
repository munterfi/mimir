import styled from 'styled-components'

interface Props {
  warning?: boolean
}

export const TextInput = styled.input<Props>`
  border: none;
  border-bottom: 2px solid ${p => p.warning ? 'red' : 'lightblue'};
  font-size: 20px;
  margin: 10px;
`
