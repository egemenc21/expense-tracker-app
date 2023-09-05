import { useContext } from "react"
import { TransactionList } from "./TransactionList"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = () => {
  const context = useContext(GlobalContext)
  console.log(context);
  return (
    <section className="transaction">
      <h3>History</h3>
      <ul>
      {context.transactions.map(transaction => <TransactionList transaction={transaction}/>)}
        
      </ul>
    </section>
  )
}
