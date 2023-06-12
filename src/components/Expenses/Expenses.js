import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYearChangeHandler = (selectedYearInput) => {
    setSelectedYear(selectedYearInput);
  };

  const filteredExpenses = props.data.filter((expense) => expense.date.getFullYear().toString() === selectedYear );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilteredYearChange={filteredYearChangeHandler}
        />
        <div class="random"></div>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
