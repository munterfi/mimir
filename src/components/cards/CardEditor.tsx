import { ChangeEvent, useContext, useState } from 'react'
import { addCard, fetchCards, updateCard } from '../../api/cards'
import { Card } from '../../models/Card'
import { AppContext } from '../../store/context'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../styles/CustomButton.ts'
import { TextInput } from '../../styles/TextInput.ts'

interface Props {
  id: string
  front: string
  back: string
  type: 'add' | 'update'
}

export const CardEditor = ({ id, front, back, type }: Props) => {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()
  const isAdd = type === 'add'
  const [inputFront, setInputFront] = useState(front)
  const [inputBack, setInputBack] = useState(back)
  const [warningFront, setWarningFront] = useState(false)
  const [warningBack, setWarningBack] = useState(false)

  const handleInputFront = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFront(e.target.value)
    setWarningFront(false)
  }

  const handleInputBack = (e: ChangeEvent<HTMLInputElement>) => {
    setInputBack(e.target.value)
    setWarningBack(false)
  }

  const handleButtonClick = () => {
    let warningFrontTmp = false
    let warningBackTmp = false
    if (inputFront.trim() === '') {
      setWarningFront(true)
      warningFrontTmp = true
    }
    if (inputBack.trim() === '') {
      setWarningBack(true)
      warningBackTmp = true
    }
    if (warningFrontTmp || warningBackTmp) {
      return
    }
    if (isAdd) {
      addCard(inputFront, inputBack)
      fetchCards().then(cards => dispatch({ type: 'set-cards', cards }))
      setInputFront('')
      setInputBack('')
    } else {
      const card: Card = { id: id, front: inputFront, back: inputBack }
      updateCard(card)
      dispatch({ type: 'update-card', card: card })
      navigate('/cards')
    }
  }

  return (
    <div>
      <TextInput value={inputFront} placeholder='Front' onChange={handleInputFront} type='text'
                 warning={warningFront} />
      <TextInput value={inputBack} placeholder='Back' onChange={handleInputBack} type='text' warning={warningBack} />
      <CustomButton onClick={handleButtonClick}>{isAdd ? 'Add' : 'Update'}</CustomButton>
    </div>
  )
}
