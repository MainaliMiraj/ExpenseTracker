import React, { useState } from "react";
import styles from "./NewTransaction.module.css";
import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const NewTransaction = () => {
  const { expenseData, setExpenseData } = useContext(ExpenseContext);
  const [transactionType, setTransactionType] = useState(""); // Initialize transactionType state
  const [amount, setAmount] = useState("");

  function handleClick() {
    if (!transactionType || !amount) {
      alert("Please enter both Transaction type and amount.");
      return;
    }

    const newAmount =
      transactionType === "expense" ? -parseFloat(amount) : parseFloat(amount);

    const newTransaction = {
      type: transactionType,
      amount: parseFloat(newAmount),
    };

    // Update total balance based on the new amount
    const newTotalBalance = expenseData.totalBalance + newAmount;

    // Update total income and total expense based on transaction type
    let newTotalIncome = expenseData.totalIncome;
    let newTotalExpense = expenseData.totalExpense;
    if (transactionType === "income") {
      newTotalIncome += parseFloat(amount);
    } else if (transactionType === "expense") {
      newTotalExpense -= parseFloat(amount);
    }

    // Create new array of transactions including the new transaction
    const newTransactions = [...expenseData.transactions, newTransaction];

    // Update expenseData with new values
    setExpenseData({
      ...expenseData,
      totalBalance: newTotalBalance,
      transactions: newTransactions,
      totalIncome: newTotalIncome,
      totalExpense: newTotalExpense,
    });

    // Reset input fields
    setTransactionType("");
    setAmount("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Add a new Transaction</div>
      <div className={styles.line}></div>
      <div className={styles.text}>Expense or Income Name:</div>

      <input
        type="text"
        className={styles.input}
        placeholder="Income or Expenses From?"
        onChange={(e) => setTransactionType(e.target.value)}
        value={transactionType}
      />
      <div className={styles.amount}>Amount:</div>
      <input
        type="number"
        className={styles.input}
        placeholder="Enter the amount..."
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <div className={styles.text}>Expense/Income Type:</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
          rowGap: "10px",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            style={{ marginRight: "5px", cursor: "pointer", padding: "5px" }}
            type="radio"
            id="income"
            name="transactionType"
            value="income"
            onChange={() => setTransactionType("income")} // Update transactionType state for income
            checked={transactionType === "income"} // Check if the current transactionType is "income"
          />
          <label htmlFor="income">Income</label>
        </div>
        <div>
          <input
            style={{ marginRight: "5px", cursor: "pointer", padding: "5px" }}
            type="radio"
            id="expense"
            value="expense"
            name="transactionType"
            onChange={() => setTransactionType("expense")} // Update transactionType state for expense
            checked={transactionType === "expense"} // Check if the current transactionType is "expense"
          />
          <label htmlFor="expense">Expense</label>
        </div>
      </div>

      <button className={styles.submit} onClick={handleClick}>
        Add a transaction
      </button>
    </div>
  );
};

export default NewTransaction;
