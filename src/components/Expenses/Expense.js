import React, { useState } from "react";

import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpensesListByYear from "./ExpensesListByYear";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {

    const [yearSelected, setYearSelected] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setYearSelected(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    });



    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={yearSelected} onChangeFilter={filterChangeHandler} ></ExpensesFilter>
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesListByYear items={filteredExpenses}></ExpensesListByYear>
            </Card>
        </div>
    );
}

export default Expense;