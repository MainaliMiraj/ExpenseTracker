import React from "react";
import styles from "./NewTransaction.module.css";

const NewTransaction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Add a new Transaction</div>
      <div className={styles.line}></div>
      <div className={styles.text}>Expense/Income Type:</div>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter Transaction type..."
      />
      <div className={styles.amount}>Amount:</div>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter the amount..."
      />
      <button  className={styles.submit}>
        Add a transaction
      </button>
    </div>
  );
};

export default NewTransaction;
