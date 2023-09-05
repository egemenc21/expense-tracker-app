import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)
  console.log(amounts)
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, value) => acc + value, 0)
  console.log(income)
  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, value) => acc + value, 0) * -1
  console.log(expense)

  return (
    <section className="income-expanses-container">
      <div>
        <h4>Income</h4>
        <p className="money-income">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money-expenses">${expense}</p>
      </div>
    </section>
  )
}
