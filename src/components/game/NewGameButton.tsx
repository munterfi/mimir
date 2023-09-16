import { useContext } from 'react'
import { deleteGame, startNewGame } from '../../api/game'
import { AppContext } from '../../store/context'
import { CustomButton } from '../../styles/CustomButton.ts'

export const NewGameButton = () => {
  const { game, dispatch } = useContext(AppContext)

  const handleButtonClick = () => {
    if (game) {
      deleteGame()
    }
    startNewGame().then(newGame =>
      dispatch({ type: 'set-game', game: newGame })
    )
  }
  return <CustomButton onClick={handleButtonClick}>Start New Game</CustomButton>
}
