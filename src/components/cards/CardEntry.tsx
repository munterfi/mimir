import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { deleteCard } from '../../api/cards'
import { Card } from '../../models/Card'
import { AppContext } from '../../store/context'
import { CustomButton } from '../../styles/CustomButton.ts'

interface Props {
  card: Card;
}

export const CardEntry = ({ card }: Props) => {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`${card.id}`)
  }
  const handleDelete = () => {
    deleteCard(card.id)
    dispatch({ type: 'remove-card', id: card.id })
  }

  return (
    <Row>
      <Text>{card.front}</Text>
      <Text>{card.back}</Text>
      <CustomButton onClick={handleEdit}>{'Edit'}</CustomButton>
      <CustomButton onClick={handleDelete}>{'Delete'}</CustomButton>
    </Row>
  )
}

const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  flex-direction: row;
  gap: 10px;
`

const Text = styled.div`
  align-self: center;
`