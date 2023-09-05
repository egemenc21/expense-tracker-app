import { useContext } from 'react'
import TransactionList from './TransactionList'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction() {
  const context = useContext(GlobalContext)

  return (
    <section className="transaction">
      <h3>History</h3>
      <ul>
        {context.transactions.map((transaction) => (
          <TransactionList key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </section>
  )
}
