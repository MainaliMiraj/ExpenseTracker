import React from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionBox } from "../TransactionBox/TransactionBox";

const TransactionHistory = () => {
  const transactions = [];

  return (
    <div className={styles.container}>
      <div className={styles.history}>History</div>
      <div className={styles.line}></div>
      <div className={styles.TransactionHistory}>
        {transactions.length === 0
          ? "No transactions available."
          : transactions.map((eachTranaction) => (
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
