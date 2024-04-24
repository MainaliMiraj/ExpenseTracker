import React from "react";
import styles from "./TransactionHistory.module.css";
import { TransactionBox } from "../TransactionBox/TransactionBox";

const TransactionHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.history}>History</div>
      <div className={styles.line}></div>
      <TransactionBox amount={564} transactionType={"Cash"} />
      <TransactionBox amount={867} transactionType={"Book"} />
      <TransactionBox amount={345} transactionType={"Camera"} />
      <TransactionBox amount={365} transactionType={"Study"} />
    </div>
  );
};

export default TransactionHistory;
