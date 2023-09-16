import { useContext } from 'react'
import { deleteGame } from '../../api/game'
import { AppContext } from '../../store/context'
import {CustomButton} from "./Button.style.ts";

export const DeleteGameButton = () => {
  const { dispatch } = useContext(AppContext)

  const handleButtonClick = () => {
    deleteGame()
    dispatch({ type: 'remove-game' })
  }
  return <CustomButton onClick={handleButtonClick}>Delete Game</CustomButton>
}
