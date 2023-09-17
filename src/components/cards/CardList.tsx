import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../store/context'
import { CardEditor } from './CardEditor'
import { CardEntry } from './CardEntry'

export const CardList = () => {
  const { cards } = useContext(AppContext)

  return (
    <CardListContainer>
      <CardEditor id="" back="" front="" type="add" />
      <List>
        {cards.map(card => (
          <CardEntry key={card.id} card={card} />
        ))}
        <Outlet />
      </List>
    </CardListContainer>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 40px;
`

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
