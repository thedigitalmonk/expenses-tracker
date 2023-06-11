import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    
  if (props.items.length === 0) {
    console.log('triggered');
    return (<h2 className="expenses-list__fallback">No expenses found.</h2>)
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;