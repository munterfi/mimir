import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../store/context'
import { CardEditor } from './CardEditor'
import styled from "styled-components";

export const CardEdit = () => {
  const { id } = useParams<{ id: string }>()
  const { cards } = useContext(AppContext)
  const card = cards.find(c => c.id === id)
  return (
    <EditContainer>
      <CardEditor
        id={card?.id ?? ''}
        front={card?.front ?? ''}
        back={card?.back ?? ''}
        type="update"
      />
    </EditContainer>
  )
}

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`