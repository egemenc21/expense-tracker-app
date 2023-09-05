import "./App.scss"
import { AddTransaction } from "./components/AddTransaction"
import { Balance } from "./components/Balance"
import { Header } from "./components/Header"
import { IncomeExpanses } from "./components/IncomeExpanses"
import { Transaction } from "./components/Transaction"
import { GlobalProvider } from "./context/GlobalState"
function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpanses/>
        <Transaction/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
