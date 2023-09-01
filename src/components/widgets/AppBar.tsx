import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {RowProps} from "../../interfaces/RowProps.ts";

export function AppBar() {
    return (
        <Bar>
            <Column textAlign={'left'}>
            <div>My App</div>
            </Column>
            <Column textAlign={'center'}>
            <Link to="/">Home</Link>
            </Column>
            <Column textAlign={'right'}>
            <Link to="/api/cards">Cards</Link>
            </Column>
        </Bar>
    )
}

const Bar = styled.div`
  display: flex;
  gap: 20px;
  background: #3be160;
  padding: 10px;
`
export const Column = styled.div<RowProps>`
  flex: 1;
  text-align: ${p => p.textAlign};
  margin: 0 auto;
`;