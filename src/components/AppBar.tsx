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
      <BarColumn align="left">
        <BarImage src="/src/assets/head.png" alt="Mimir logo" />
        Mimir
      </BarColumn>
      <BarColumn>
        <BarLink to="/">{statusText}</BarLink>
      </BarColumn>
      <BarColumn align="right">
        <BarLink to="/cards">Manage Cards</BarLink>
      </BarColumn>
    </Bar>
  )
}

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background: #053f67;
  color: white;
  font-size: 1.2em;
  gap: 20px;
`

interface RowProps {
  align?: string
}

const BarColumn = styled.div<RowProps>`
  flex: 1;
  text-align: ${props => props.align || 'center'};
  margin: 0 auto;
`

const BarLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #73888f;
  }
`

const BarImage = styled.img`
  width: 2em;
  height: 2em;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`
