import { styled } from 'styled-components'
import { Result } from '../../models/Result'
import { Main } from '../Main'

interface Props {
  results: Result[]
}

export const GameResults = ({ results }: Props) => {
  return (
    <List>
      {results.map(result => (
        <div key={result.id}>
          {result.front} - {result.back} - {result.answer} -{' '}
          {result.accepted ? '✓' : '✗'}
        </div>
      ))}
    </List>
  )
}

const List = styled(Main)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
