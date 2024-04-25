import React, { useState } from "react";
import styles from "./NewTransaction.module.css";
import { useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const NewTransaction = () => {
  const { expenseData, setExpenseData } = useContext(ExpenseContext);
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");
  let totalIncome = 0;
  let totalExpense = 0;

  function handleClick() {
    if (!transactionType || !amount) {
      alert("Please enter both Transaction type and amount.");
    }
    const newTransaction = {
      type: transactionType,
      amount: parseFloat(amount),
    };
    if (amount < 0) {
      totalExpense = totalExpense + amount;
    } else {
      totalIncome = totalIncome + amount;
    }

    const newTotalBalance = (expenseData.totalBalance =
      parseFloat(amount) + expenseData.totalBalance);

    const newTransactions = [...expenseData.transactions, newTransaction];

    setExpenseData({
      ...expenseData,
      totalBalance: newTotalBalance,
      transactions: newTransactions,
    });

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
      <p style={{ fontSize: "small", color: "orange" }}>
        Include '-'' if its an expense.
      </p>
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
