import { Route, Routes } from 'react-router-dom'
import { Game } from './Game'
import { Layout } from './Layout'
import { CardEdit } from './CardEdit'
import { Cards } from './Cards'
import { CardList } from './CardList'

export default function App() {
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
