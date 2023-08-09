import React, {useState} from "react";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

const DUMMY_EXPENSE = [];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // return React.createElement('div', {}, 
  // React.createElement('h2', {}, 'Let\'s get started!'),
  // React.createElement(Expense, {items:expenses})
  // );

  const addExpenseHandler = (newSubmittedExpense) => {
    setExpenses((prevExpenses) => {
      return [newSubmittedExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div >
  );
}

export default App;
