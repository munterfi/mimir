import {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AppContext} from '../store/context'
import {startNewGame} from "../api/game.ts";
import {CustomButton, DisabledDiv} from "./game/Button.style.ts";

export function AppBar() {
    const {game, dispatch} = useContext(AppContext)

    const statusText = game
        ? game.solved.length === game.cardCount
            ? 'Finished'
            : `Solve #${game.solved.length + 1}`
        : 'New Game'

    const handleButtonClick = () => {
        if (statusText === 'New Game') {
            startNewGame().then(newGame =>
                dispatch({type: 'set-game', game: newGame})
            )
        }
    }

    return (
        <Bar>
            <Column textAlign={'left'}>Mimir</Column>
            <Column textAlign={'center'}>
                {statusText === 'New Game' ? <CustomButton onClick={handleButtonClick}>{statusText}</CustomButton> :
                    <DisabledDiv>{statusText}</DisabledDiv>}
            </Column>
            <Column textAlign={'right'}>
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
`;

export interface RowProps {
    textAlign?: string;
}

const Column = styled.div<RowProps>`
  flex: 1;
  text-align: ${p => p.textAlign};
  margin: 0 auto;
`;