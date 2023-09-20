import { ChangeEvent, useContext, useState } from 'react'
import { AppContext } from '../../store/context'
import { DeleteGameButton } from './DeleteGameButton'
import { setAnswer } from '../../api/game'
import { Button } from '../../styles/Button.ts'
import styled from 'styled-components'
import { TextInput } from '../../styles/TextInput.ts'

export const GameActive = () => {
  const { game, dispatch } = useContext(AppContext)
  const [input, setInput] = useState('')
  const [warning, setWarning] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setWarning(false)
  }

  const handleSubmitButton = () => {
    if (input.trim() === '') {
      setWarning(true)
      return
    }
    setAnswer(input).then(updatedGame => {
      dispatch({ type: 'set-game', game: updatedGame })
    })
    setInput('')
  }

  const progress = game
    ? `${Math.round((game.solved.length / game.cardCount) * 100)}%`
    : 'N/A'
  const cardFront = game ? game.front : 'N/A'

  return (
    <div>
      <GameBar>
        <div>Progress {progress}</div>
        <DeleteGameButton />
      </GameBar>
      <GameCardContent>
        <CardFront>{cardFront}</CardFront>
        <div>
          <TextInput
            value={input}
            onChange={handleInputChange}
            type="text"
            $warning={warning}
          />
          <Button onClick={handleSubmitButton}>Submit</Button>
        </div>
      </GameCardContent>
    </div>
  )
}

const CardFront = styled.div`
  font-family: sans-serif;
  justify-content: center;
  width: 50%;
  padding: 150px 1px;
  text-align: center;
  box-sizing: border-box;
  margin: 50px;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 50px;
  background-color: white;
  color: #053f66;
`

const GameBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  font-size: 1.2em;
  gap: 20px;
`

const GameCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
