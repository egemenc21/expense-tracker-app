import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction(text, amount)
    setText('')
    setAmount('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">
            Text
            <input
              type="text"
              value={text}
              id="text"
              onChange={(e) => {
                setText(e.target.value)
              }}
              placeholder="Enter text..."
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
              placeholder="Enter amount..."
            />
          </label>
        </div>        
        <button type="submit" className="btn btn-income">
          Add an Income
        </button>
        <button
          type="submit"
          className="btn btn-expense"
          onClick={() => setAmount(amount * -1)}
        >
          Add an Expense
        </button>
      </form>
    </>
  )
}
