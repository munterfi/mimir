import {useContext, useState} from 'react'
import {AppContext} from '../../store/context'
import {DeleteGameButton} from './DeleteGameButton'
import {setAnswer} from '../../api/game'
import {CustomButton} from "./Button.style.ts";
import styled from "styled-components";

export const ActiveGame = () => {
    const {game, dispatch} = useContext(AppContext)
    const [input, setInput] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmitButton = () => {
        setAnswer(input).then(updatedGame => {
            dispatch({type: 'set-game', game: updatedGame})
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
                <DeleteGameButton/>
            </GameBar>
            <GameCardContent>
                <Card>{cardFront}</Card>
               <div>
                   <Input value={input} onChange={handleInputChange} type="text"/>
                   <CustomButton onClick={handleSubmitButton}>Submit</CustomButton>
               </div>
            </GameCardContent>
        </div>
    )
}

const Input = styled.input`
  border: none;
  border-bottom: 2px solid lightblue;
  font-size: 20px;
  margin: 10px;
`

const Card = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 100px 150px;
  margin: 50px 50px;
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