import { Game } from '../../models/Game'
import { GameResults } from './GameResults'
import { NewGameButton } from './NewGameButton'
import styled from 'styled-components'

interface Props {
  game?: Game
}

export const GameInactive = ({ game }: Props) => {
  return (
    <Container>
      <ButtonContainer>
        <NewGameButton />
      </ButtonContainer>
      {game ? (
        <Result>
          Solved {game.solved.filter(result => result.accepted).length} out of{' '}
          {game.cardCount} correctly
        </Result>
      ) : (
        <NoGame>Sorry, no Game Running.</NoGame>
      )}
      {game && <GameResults results={game.solved} />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
  gap: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
  align-items: center;
  font-size: 1.2em;
`

const NoGame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
  font-size: 1.2em;
`
