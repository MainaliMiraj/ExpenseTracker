import React from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionBox } from "../TransactionBox/TransactionBox";

const TransactionHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.history}>History</div>
      <div className={styles.line}></div>
      <div className={styles.TransactionHistory}>
        <TransactionBox amount={564} transactionType={"Cash"} />
        
        
      </div>
    </div>
  );
};

export default TransactionHistory;
