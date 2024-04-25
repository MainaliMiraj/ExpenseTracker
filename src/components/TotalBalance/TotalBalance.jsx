import React, { useContext } from "react";
import styles from "./TotalBalance.module.css";
import ExpenseContext from "../../context/ExpenseContext";

const TotalBalance = () => {
  const { expenseData } = useContext(ExpenseContext);
  const colorClass = expenseData.totalBalance < 0 ? styles.red : styles.green;
  return (
    <div className={styles.show_balance}>
      <div className={styles.balance_title}>YOUR BALANCE</div>
      <div className={`${styles.balance_amount} ${colorClass}`}>
        ${expenseData.totalBalance}
      </div>
    </div>
  );
};

export default TotalBalance;
