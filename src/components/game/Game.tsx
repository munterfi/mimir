import { useContext, useEffect } from 'react'
import { fetchGame } from '../../api/game'
import { AppContext } from '../../store/context'
import { ActiveGame } from './ActiveGame'
import { InactiveGame } from './InactiveGame'

export const Game = () => {
  const { game, dispatch } = useContext(AppContext)

  useEffect(() => {
    fetchGame()
      .then(currentGame => {
        dispatch({ type: 'set-game', game: currentGame })
      })
      .catch(() => {
        dispatch({ type: 'remove-game' })
      })
  }, [])

  if (!game || game.cardCount === game.solved.length) {
    return <InactiveGame game={game} />
  } else {
    return <ActiveGame />
  }
}
