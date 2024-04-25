import React, { useContext } from "react";
import styles from "./IncomeExpensesBox.module.css";
import ExpenseContext from "../../context/ExpenseContext";

const IncomeExpensesBox = () => {
  const { expenseData } = useContext(ExpenseContext);
  return (
    <div className={styles.income_expenses}>
      <div className={styles.income}>
        <div className={styles.income_title}>INCOME</div>
        <div className={styles.income_amount}>${expenseData.totalIncome}</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.expenses}>
        <div className={styles.expense_title}>EXPENSES</div>
        <div className={styles.expenses_amount}>
          ${expenseData.totalExpense}
        </div>
      </div>
    </div>
  );
};

export default IncomeExpensesBox;
