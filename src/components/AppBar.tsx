import {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AppContext} from '../store/context'


export function AppBar() {
    const {game} = useContext(AppContext)

    const statusText = game
        ? game.solved.length === game.cardCount
            ? 'Finished'
            : `Solve #${game.solved.length + 1}`
        : 'New Game'

    return (
        <Bar>
            <Column textAlign='left'>Mimir</Column>
            <Column textAlign='center'>
                <ManageCardsLink to="/">{statusText}</ManageCardsLink>
            </Column>
            <Column textAlign='right'>
                <ManageCardsLink to="/cards">Manage Cards</ManageCardsLink>
            </Column>
        </Bar>
    )
}


const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background: #053f67;
  color: white;
  font-size: 1.2em;
  gap: 20px;
`

const ManageCardsLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #73888f;
  }
`;

interface RowProps {
    textAlign?: string;
}

const Column = styled.div<RowProps>`
  flex: 1;
  text-align: ${props => props.textAlign || 'center'};
  margin: 0 auto;
`;