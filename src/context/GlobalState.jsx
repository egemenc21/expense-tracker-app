import { createContext, useMemo, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }
  const addTransaction = (text, amount) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      },
    })
  }
  const value = useMemo(
    () => ({
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }),
    [state.transactions],
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
