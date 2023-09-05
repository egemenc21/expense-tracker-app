export const TransactionList = ({ transaction }) => {
  const sign = transaction.amount > 0 ? '+' : '-'
  return (
    <li className="transaction-list-container">
      <div className="transaction-list">
        <p>{transaction.text}</p>
        <span className="transaction-income">
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>

      <button>X</button>
    </li>
  )
}
