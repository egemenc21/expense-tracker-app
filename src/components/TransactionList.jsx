import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// eslint-disable-next-line react/prop-types
export default function TransactionList({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount > 0 ? '+' : '-'
  return (
    <li className="transaction-list-container">
      <div className="transaction-list">
        <p>{transaction.text}</p>
        <span
          className={
            sign === '+' ? 'transaction-income' : 'transaction-expenses'
          }
        >
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>

      <button type="submit" onClick={() => deleteTransaction(transaction.id)}>
        X
      </button>
    </li>
  )
}
