import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
  const { transactions } = useContext(GlobalContext)
  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2)

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <span>${total}</span>
    </div>
  )
}
