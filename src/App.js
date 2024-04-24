import "./App.css";
import IncomeExpensesBox from "./components/IncomeExpensesBox/IncomeExpensesBox";
import TotalBalance from "./components/TotalBalance/TotalBalance";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import NewTransaction from "./components/NewTransaction.jsx/NewTransaction";
import { ExpenseTrackerProvider } from "./ExpenseTrackerContext";

function App() {
  return (
    <ExpenseTrackerProvider>
      <div className="container">
        <div className="box">
          <div className="title">Expense Tracker</div>
          <TotalBalance amount={447.0} />
          <IncomeExpensesBox income={500} expenses={300} />
          <TransactionHistory />
          <NewTransaction />
        </div>
      </div>
    </ExpenseTrackerProvider>
  );
}

export default App;
