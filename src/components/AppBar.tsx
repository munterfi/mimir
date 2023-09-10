import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../store/context'

export function AppBar() {
  const { game } = useContext(AppContext)

  const statusText = game
    ? game.solved.length === game.cardCount
      ? 'Finished'
      : `Solve #${game.solved.length + 1}`
    : 'New Game'

  return (
    <Bar>
      <div>Mimir</div>
      <Link to="/">{statusText}</Link>
      <Link to="/cards">Manage Cards</Link>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  gap: 20px;
  background: lightblue;
  padding: 10px;
`
