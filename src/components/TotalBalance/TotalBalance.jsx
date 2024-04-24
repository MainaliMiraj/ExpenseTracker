import React from "react";
import styles from "./TotalBalance.module.css";


const TotalBalance = () => {
 const totalBalance=0
  const colorClass = totalBalance < 0 ? styles.red : styles.green;
  return (
    <div className={styles.show_balance}>
      <div className={styles.balance_title}>YOUR BALANCE</div>
      <div className={`${styles.balance_amount} ${colorClass}`}>
        ${totalBalance}
      </div>
    </div>
  );
};

export default TotalBalance;
