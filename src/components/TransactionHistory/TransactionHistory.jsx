import React from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionBox } from "../TransactionBox/TransactionBox";

const TransactionHistory = () => {
  const transactionHistory = [];
  return (
    <div className={styles.container}>
      <div className={styles.history}>History</div>
      <div className={styles.line}></div>
      <div className={styles.TransactionHistory}>
        {transactionHistory.length === 0
          ? "No transactions available."
          : transactionHistory.map((eachTranaction) => (
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
