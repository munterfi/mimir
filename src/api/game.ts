import { Game } from '../models/Game'
import { apiRequest } from './utils'

const apiUrl = '/api/game'

export const fetchGame = (): Promise<Game> => {
  return apiRequest<Game>(apiUrl, {})
}

export const startNewGame = (): Promise<Game> => {
  const options: RequestInit = {
    method: 'POST',
  }
  return apiRequest<Game>(apiUrl, options)
}

export const setAnswer = (answer: string): Promise<Game> => {
  const options: RequestInit = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      answer: answer,
    }),
  }
  return apiRequest<Game>(apiUrl, options)
}

export const deleteGame = (): void => {
  const options: RequestInit = {
    method: 'DELETE',
  }
  fetch(apiUrl, options)
}
