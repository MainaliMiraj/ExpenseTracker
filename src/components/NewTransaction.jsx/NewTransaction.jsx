import React, { useState } from "react";
import styles from "./NewTransaction.module.css";

const NewTransaction = () => {
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState(0);

  function handleClick() {
    console.log(transactionType, amount);
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Add a new Transaction</div>
      <div className={styles.line}></div>
      <div className={styles.text}>Expense/Income Type:</div>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter Transaction type..."
        onChange={(e) => setTransactionType(e.target.value)}
      />
      <div className={styles.amount}>Amount:</div>
      <input
        type="number"
        className={styles.input}
        placeholder="Enter the amount..."
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button className={styles.submit} onClick={handleClick}>
        Add a transaction
      </button>
    </div>
  );
};

export default NewTransaction;
