import { Card } from './Card'
import { Game } from './Game'

type SetLoadingAction = {
  type: 'set-loading'
  value: boolean
}

type SetCardsAction = {
  type: 'set-cards'
  cards: Card[]
}

type UpdateCardAction = {
  type: 'add-card' | 'update-card'
  card: Card
}

type RemoveCardAction = {
  type: 'remove-card'
  id: string
}

type SetGameAction = {
  type: 'set-game'
  game: Game
}

type RemoveGameAction = {
  type: 'remove-game'
}

export type Action =
  | SetLoadingAction
  | SetCardsAction
  | UpdateCardAction
  | RemoveCardAction
  | SetGameAction
  | RemoveGameAction
