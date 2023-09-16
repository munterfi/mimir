import {useContext, useState, ChangeEvent} from 'react'
import {addCard, fetchCards, updateCard} from '../../api/cards'
import {Card} from '../../models/Card'
import {AppContext} from '../../store/context'
import {useNavigate} from "react-router-dom";
import {CustomButton} from "../game/Button.style.ts";
import {TextInput} from "../game/Input.styles.ts";

interface Props {
    id: string
    front: string
    back: string
    type: 'add' | 'update'
}

export const CardEditor = ({id, front, back, type}: Props) => {
    const {dispatch} = useContext(AppContext)
    const navigate = useNavigate()
    const isAdd = type === 'add'
    const [inputFront, setInputFront] = useState(front)
    const [inputBack, setInputBack] = useState(back)
    const [warning, setWarning] = useState('')

    const handleInputFront = (e: ChangeEvent<HTMLInputElement>) =>
        setInputFront(e.target.value)
    const handleInputBack = (e: ChangeEvent<HTMLInputElement>) =>
        setInputBack(e.target.value)

    const handleButtonClick = () => {
        if (inputFront.trim() === '' || inputBack.trim() === '') {
            setWarning('Invalid input!')
            return
        }
        if (isAdd) {
            addCard(inputFront, inputBack)
            fetchCards().then(cards => dispatch({type: 'set-cards', cards}))
            setInputFront('')
            setInputBack('')
        } else {
            const card: Card = {id: id, front: inputFront, back: inputBack}
            updateCard(card)
            dispatch({type: 'update-card', card: card})
            navigate('/cards')
        }
        setWarning('')
    }

    return (
        <div>
            <TextInput value={inputFront} onChange={handleInputFront} type="text"/>
            <TextInput value={inputBack} onChange={handleInputBack} type="text"/>
            <CustomButton onClick={handleButtonClick}>{isAdd ? 'Add' : 'Update'}</CustomButton>
            <div>{warning}</div>
        </div>
    )
}
