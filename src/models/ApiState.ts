import { Card } from './Card'
import { Game } from './Game'

export interface ApiState {
  loading: boolean
  cards: Card[]
  game?: Game
}
