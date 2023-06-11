import React, {useState} from 'react';
import './ExpenseForm.css';


function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formDisplay, setFormDisplay] = useState(false);

    const titleEventHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountEventHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateEventHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const expenseFormHandler = (event) => {
        event.preventDefault();
        setFormDisplay(true);
    }

    const closeFormHandler = (event) => {
        event.preventDefault();
        setFormDisplay(false);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormDisplay(false);
    }
    

    return (
        <div>
            { formDisplay ? <form onSubmit={onSubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleEventHandler} />
                    </div>  
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountEventHandler} />
                    </div>  
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateEventHandler} />
                    </div>    
                </div>

                <div className='new-expense__actions'>
                    <button onClick={closeFormHandler}> Cancel </button>
                    <button type='submit'> Add Expense </button>
                </div>
            </form> :  <button onClick={expenseFormHandler}> Add a new expense </button> }
            
            
        </div>
    );
  }

export default ExpenseForm;