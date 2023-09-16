import { Action } from '../models/Action'
import { ApiState } from '../models/ApiState'

export function appStateReducer(state: ApiState, action: Action): ApiState {
  switch (action.type) {
    case 'set-cards':
      return {
        ...state,
        cards: action.cards
      }
    case 'update-card':
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id !== action.card.id ? card : action.card
        )
      }
    case 'remove-card':
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.id)
      }
    case 'set-game':
      return {
        ...state,
        game: action.game
      }
    case 'remove-game':
      return {
        ...state,
        game: undefined
      }
  }
}

export const initialApiState: ApiState = {
  cards: [],
  game: undefined
}
