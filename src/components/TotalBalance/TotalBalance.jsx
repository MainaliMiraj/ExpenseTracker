import React from "react";
import styles from "./TotalBalance.module.css";

const TotalBalance = ({ amount }) => {
  const colorClass = amount < 0 ? styles.red : styles.green;
  return (
    <div className={styles.show_balance}>
      <div className={styles.balance_title}>YOUR BALANCE</div>
      <div className={`${styles.balance_amount} ${colorClass}`}>
        ${amount}
      </div>
    </div>
  );
};

export default TotalBalance;
