import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../store/context'
import { CardEditor } from './CardEditor'

export const CardEdit = () => {
  const { id } = useParams<{ id: string }>()
  const { cards } = useContext(AppContext)
  const card = cards.find(c => c.id === id)
  return (
    <div>
      <Heading>Edit Card</Heading>
      <CardEditor
        id={card?.id ?? ''}
        front={card?.front ?? ''}
        back={card?.back ?? ''}
        type="update"
      />
    </div>
  )
}

const Heading = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 600;
`
