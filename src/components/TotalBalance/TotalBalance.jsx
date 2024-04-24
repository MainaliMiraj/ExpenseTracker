import React from "react";
import styles from "./TotalBalance.module.css";

const TotalBalance = ({ amount }) => {
  return (
    <div className={styles.show_balance}>
      <div className={styles.balance_title}>YOUR BALANCE</div>
      <div className={styles.balance_amount}>${amount}</div>
    </div>
  );
};

export default TotalBalance;
