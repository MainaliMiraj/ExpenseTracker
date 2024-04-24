import React from "react";
import styles from "./TransctionBox.module.css";

export const TransactionBox = ({ transactionType, amount }) => {
  return (
    <div className={styles.container}>
      <div>{transactionType}</div>
      <div>${amount}</div>
    </div>
  );
};
