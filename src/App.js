import React, {useState} from "react";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

const DUMMY_EXPENSE = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
  },
  {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
  },
  {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
  },
  {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
  },
];


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
