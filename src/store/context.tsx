import { createContext, ReactNode, useReducer } from 'react'
import { Action } from '../models/Action'
import { ApiState } from '../models/ApiState'
import { appStateReducer, initialApiState } from './appStateReducer'

interface AppState extends ApiState {
  dispatch: (action: Action) => void
}

const initialState: AppState = {
  ...initialApiState,
  dispatch: (action: Action) => {},
}

export const AppContext = createContext<AppState>(initialState)

interface Props {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState)

  const store = {
    ...state,
    dispatch,
  }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}
