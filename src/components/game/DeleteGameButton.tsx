import { useContext } from 'react'
import { deleteGame } from '../../api/game'
import { AppContext } from '../../store/context'
import { Button } from '../../styles/Button.ts'

export const DeleteGameButton = () => {
  const { dispatch } = useContext(AppContext)

  const handleButtonClick = () => {
    deleteGame()
    dispatch({ type: 'remove-game' })
  }
  return <Button onClick={handleButtonClick}>Delete Game</Button>
}
