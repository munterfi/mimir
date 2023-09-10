import { Game } from '../../models/Game'
import { GameResults } from './GameResults'
import { NewGameButton } from './NewGameButton'

interface Props {
  game?: Game
}

export const InactiveGame = ({ game }: Props) => {
  return (
    <div>
      <NewGameButton />
      {game ? (
        <div>
          Solved {game.solved.filter(result => result.accepted).length} out of{' '}
          {game.cardCount} correctly
        </div>
      ) : (
        <div>No Game Running.</div>
      )}
      {game && <GameResults results={game.solved} />}
    </div>
  )
}
