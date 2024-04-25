import React, { useContext } from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionBox } from "../TransactionBox/TransactionBox";
import ExpenseContext from "../../context/ExpenseContext";

const TransactionHistory = () => {
  const {expenseData}=useContext(ExpenseContext)
  return (
    <div className={styles.container}>
      <div className={styles.history}>History</div>
      <div className={styles.line}></div>
      <div className={styles.TransactionHistory}>
        {expenseData.transactions.length === 0
          ? "No transactions available."
          : expenseData.transactions.map((eachTranaction) => (
              <TransactionBox
                transactionType={eachTranaction.type}
                amount={eachTranaction.amount}
              />
            ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
