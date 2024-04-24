import React from "react";
import styles from "./TransctionBox.module.css";

export const TransactionBox = ({ transactionType, amount }) => {
  const colorClass = amount < 0 ? styles.red : styles.green;
  return (
    <div className={styles.container}>
      <div>{transactionType}</div>
      <div className={`${colorClass}`}>${amount}</div>
    </div>
  );
};
