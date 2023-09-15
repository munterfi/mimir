import {styled} from 'styled-components'
import {Result} from '../../models/Result'

interface Props {
    results: Result[]
}

export const GameResults = ({results}: Props) => {
    return (
        <div>
            <THead>
                <tr>
                    <th>Front</th>
                    <th>Back</th>
                    <th>Answer</th>
                    <th>Accepted</th>
                </tr>
            </THead>
            {results.map(result => (
                <TR key={result.id}>
                    <TD>{result.front}</TD>
                    <TD>{result.back}</TD>
                    <TD>{result.answer}</TD>
                    <TD>{result.accepted ? '✅' : '❌'}</TD>
                </TR>
            ))}
        </div>
    )
}


const TD = styled.td`
  padding: 10px 30px;
`;

const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ddd;
  }
`;

const THead = styled.thead`
  border-bottom: 3px solid black;
`;
