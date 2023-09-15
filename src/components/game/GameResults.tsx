import {Result} from '../../models/Result'
import {TD, THead, TR} from "../table.styles.ts";

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


