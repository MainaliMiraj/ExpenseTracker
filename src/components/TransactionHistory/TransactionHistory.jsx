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
        <TransactionBox amount={-345} transactionType={"Rent"} />
        <TransactionBox amount={1234} transactionType={"Salary"} />
        <TransactionBox amount={-900} transactionType={"Laptop Purchase"} />
      </div>
    </div>
  );
};

export default TransactionHistory;
