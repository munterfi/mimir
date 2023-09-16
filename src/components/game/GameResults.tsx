import { Result } from '../../models/Result'
import styled from 'styled-components'

interface Props {
  results: Result[]
}

export const GameResults = ({ results }: Props) => {
  return (
    <Table>
      <THead>
        <tr>
          <th>Front</th>
          <th>Back</th>
          <th>Answer</th>
          <th>Accepted</th>
        </tr>
      </THead>
      <tbody>
      {results.map(result => (
        <TR key={result.id}>
          <TD>{result.front}</TD>
          <TD>{result.back}</TD>
          <TD>{result.answer}</TD>
          <TD>{result.accepted ? '✅' : '❌'}</TD>
        </TR>
      ))}
      </tbody>
    </Table>
  )
}


const Table = styled.table`
  border-collapse: collapse;
`

const TD = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
`

const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ddd;
  }
`

const THead = styled.thead`
  border-bottom: 3px solid black;
  text-align: left;
`
