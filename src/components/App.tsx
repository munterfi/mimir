import { Route, Routes } from 'react-router-dom'
import { Game } from './game/Game'
import { Layout } from './Layout'
import { CardEdit } from './cards/CardEdit'
import { Cards } from './cards/Cards'
import { CardList } from './cards/CardList'
import { useContext, useEffect } from 'react'
import { AppContext } from '../store/context.tsx'
import { fetchGame } from '../api/game.ts'
import { fetchCards } from '../api/cards.ts'

export default function App() {
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    fetchGame()
      .then(currentGame => {
        dispatch({ type: 'set-game', game: currentGame })
      })
      .catch(() => {
        dispatch({ type: 'remove-game' })
      })
    fetchCards().then(cards => {
      dispatch({ type: 'set-cards', cards: cards })
      dispatch({ type: 'set-loading', value: false })
    })
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Game />} />
        <Route path="cards" element={<Cards />}>
          <Route index element={<CardList />} />
          <Route path=":id" element={<CardEdit />} />
        </Route>
      </Route>
    </Routes>
  )
}
