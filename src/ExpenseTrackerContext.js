// ExpenseTrackerContext.js
import { createContext, useContext, useState } from "react";

const ExpenseTrackerContext = createContext();

export const useExpenseTracker = () => useContext(ExpenseTrackerContext);

export const ExpenseTrackerProvider = ({ children }) => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction = (transaction) => {
    setTransactionHistory([...transactionHistory, transaction]);
  };
  return (
    <ExpenseTrackerContext.Provider
      value={{
        totalBalance,
        totalIncome,
        totalExpenses,
        transactionHistory,
        transactionType,
        amount,
        setTransactionType,
        setAmount,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
