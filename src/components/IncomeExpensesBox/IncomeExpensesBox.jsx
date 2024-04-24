import React from "react";
import styles from "./IncomeExpensesBox.module.css";

const IncomeExpensesBox = () => {
  const totalIncome = 0;
  const totalExpenses = 0;
  return (
    <div className={styles.income_expenses}>
      <div className={styles.income}>
        <div className={styles.income_title}>INCOME</div>
        <div className={styles.income_amount}>${totalIncome}</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.expenses}>
        <div className={styles.expense_title}>EXPENSES</div>
        <div className={styles.expenses_amount}>${totalExpenses}</div>
      </div>
    </div>
  );
};

export default IncomeExpensesBox;
