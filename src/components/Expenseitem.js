import React from 'react'
import { useState } from 'react';
import "./Expenseitem.css";


const explist = [

]

const List = ({ explist }) => (
    <>
        {explist.length >0 && explist.map((item) => (
            <li>
                {item.expens}
            </li>
        ))}
    </>
)
// add inputs



export default function Expenseitem() {

    const [fill, setFill] = useState({

        amount: 0,
        expens: ' ',
        date: ' '
    })
    const [history, setHistory] = useState([])
    const fillEvent = (event) => {
        console.log(event.target.value)
        setFill((prev) => ({...prev, [event.target.name]: event.target.value}))
        // setFill({...fillxs, [event.target.name]: event.target.value})
    }
    const expense = (e) => {
        e.preventDefault();
        setHistory((prev)=>([...prev, fill]))
    }
    return (
        <form onSubmit={expense}>
            <div className="father">
                <div className='expense-item'>
                    <div>Date: <input type='date' id='date' onChange={fillEvent} value={fill.date} name="date"/></div>
                    <div className='expense-item__description'>
                        <div>Expense: <input type='text' onChange={fillEvent} value={fill.expens} name="expens" /></div>
                        <div className='expense-item__price'>Amount: <input type='number' onChange={fillEvent} value={fill.amount} name="amount"/></div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
                <div className='title-all'>
                    <h2>History</h2>
                    <List explist={history} />
                </div>
            </div>
        </form>


    )
}

