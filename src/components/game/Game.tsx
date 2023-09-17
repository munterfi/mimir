import { useContext } from 'react'
import { AppContext } from '../../store/context'
import { GameActive } from './GameActive.tsx'
import { GameInactive } from './GameInactive.tsx'

export const Game = () => {
  const { game } = useContext(AppContext)

  if (!game || game.cardCount === game.solved.length) {
    return <GameInactive game={game} />
  } else {
    return <GameActive />
  }
}
