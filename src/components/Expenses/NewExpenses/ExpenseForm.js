import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);
    const [titleError, setTitleError] = useState('');
    const [amountError, setAmountError] = useState('');
    const [dateError, setDateError] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const titleIsValid = enteredTitle.trim() !== '';
        const amountIsValid = enteredAmount !== '';
        const dateIsValid = enteredDate !== '';

        setFormIsValid(titleIsValid && amountIsValid && dateIsValid);

        if (!titleIsValid) {
            setTitleError('Title cannot be empty');
        } else {
            setTitleError('');
        }

        if (!amountIsValid) {
            setAmountError('Amount cannot be empty');
        } else {
            setAmountError('');
        }

        if (!dateIsValid) {
            setDateError('Date cannot be empty');
        } else {
            setDateError('');
        }

        if (titleIsValid && amountIsValid && dateIsValid) {
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            };

            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }
    };

    return (
        <form onSubmit={submitHandler} required="required">
            <div className="new-expense__controls">
                <div className={`new-expense__control ${!formIsValid && titleError ? 'new-expense__invalid' : ''}`}>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    {!formIsValid && titleError && <p className="new-expense__error">{titleError}</p>}
                </div>
                <div className={`new-expense__control ${!formIsValid && amountError ? 'new-expense__invalid' : ''}`}>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    {!formIsValid && amountError && <p className="new-expense__error">{amountError}</p>}
                </div>
                <div className={`new-expense__control ${!formIsValid && dateError ? 'new-expense__invalid' : ''}`}>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    {!formIsValid && dateError && <p className="new-expense__error">{dateError}</p>}
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
