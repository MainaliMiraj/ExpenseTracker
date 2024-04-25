import ExpenseContext from "./ExpenseContext";
import { useState } from "react";

const ExpenseContextProvider = ({ children }) => {
  const [expenseData, setExpenseData] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
    transactions: [],
    transactionType: "",
    amount: 0,
  });
  return (
    <ExpenseContext.Provider value={{ expenseData, setExpenseData }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
