import { useContext, useState } from 'react'
import { AppContext } from '../../store/context'
import { DeleteGameButton } from './DeleteGameButton'
import { setAnswer } from '../../api/game'

export const ActiveGame = () => {
  const { game, dispatch } = useContext(AppContext)
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmitButton = () => {
    setAnswer(input).then(updatedGame => {
      dispatch({ type: 'set-game', game: updatedGame })
    })
    setInput('')
  }

  const progress = game
    ? `${(game.solved.length / game.cardCount) * 100}%`
    : 'N/A'
  const cardFront = game ? game.front : 'N/A'

  return (
    <div>
      <div>Progress {progress}</div>
      <DeleteGameButton />
      <div>Card Front: {cardFront}</div>
      <input value={input} onChange={handleInputChange} type="text" />
      <button onClick={handleSubmitButton}>Submit</button>
    </div>
  )
}
