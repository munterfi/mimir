import { Result } from './Result'

export interface Game {
  front: string
  cardCount: number
  solved: Result[]
}
