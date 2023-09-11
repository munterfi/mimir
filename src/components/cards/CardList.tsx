import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { fetchCards } from '../../api/cards'
import { AppContext } from '../../store/context'
import { Main } from '../Main'
import { CardEditor } from './CardEditor'
import { CardEntry } from './CardEntry'

export const CardList = () => {
  const { cards, dispatch } = useContext(AppContext)

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchCards()
      dispatch({ type: 'set-cards', cards })
    }
    onMount()
  }, [])

  return (
    <div>
      <Heading>Add Card</Heading>
      <CardEditor id="" back="" front="" type="add" />
      <List>
        {cards.map(card => (
          <CardEntry key={card.id} card={card} />
        ))}
        <Outlet />
      </List>
    </div>
  )
}

const List = styled(Main)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Heading = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 600;
`
