import React from "react";
import styles from "./NewTransaction.module.css";

const NewTransaction = () => {
  return (
    <div className="container">
      <div className={styles.title}>Add a new Transaction</div>
      <div className={styles.line}></div>
      <div className={styles.text}>Text</div>
      <div className={styles.amount}>Amount</div>
    </div>
  );
};

export default NewTransaction;
