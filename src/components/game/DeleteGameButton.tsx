import { useContext } from 'react'
import { deleteGame } from '../../api/game'
import { AppContext } from '../../store/context'

export const DeleteGameButton = () => {
  const { dispatch } = useContext(AppContext)

  const handleButtonClick = () => {
    deleteGame()
    dispatch({ type: 'remove-game' })
  }
  return <button onClick={handleButtonClick}>Delete Game</button>
}
