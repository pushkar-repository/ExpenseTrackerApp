import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isAdding, setIsAdding] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpenseData(expenseData);
        setIsAdding(false);
    };

    const AddingButtonHandler = () => {
        setIsAdding(true);
    };

    const HidingButtonHandler = () => {
        setIsAdding(false);
    };

    return (
        <div className="new-expense">
            {!isAdding && <button onClick={AddingButtonHandler}>Add New Expenses</button>}
            {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={HidingButtonHandler}></ExpenseForm>}
        </div>
    );
};

export default NewExpense;