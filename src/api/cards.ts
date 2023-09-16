import { Card } from '../models/Card'
import { apiRequest } from './utils'

const apiUrl = '/api/cards'

export const fetchCards = (): Promise<Card[]> => {
  return apiRequest<Card[]>(apiUrl, {})
}

export const addCard = (front: string, back: string): Promise<Card> => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      front,
      back
    })
  }
  return apiRequest<Card>(apiUrl, options)
}

export const updateCard = (card: Card): Promise<Card> => {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  }
  return apiRequest<Card>(`${apiUrl}/${card.id}`, options)
}

export const deleteCard = (id: string): void => {
  const options: RequestInit = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${apiUrl}/${id}`, options)
}
