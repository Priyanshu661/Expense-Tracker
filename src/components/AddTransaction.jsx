import React, { useContext, useState } from 'react'
import { tp } from './App'

function AddTransaction(props){

  const {addTransaction}=useContext(tp)

const [text,setText]=useState("");
const [amount,setAmount]=useState(0);

function handleText(event){
    const {value}=event.target;

    setText(value)

}

function handleAmount(event){
    const {value}=event.target;

    setAmount(value)

}





  return (
    <div>
    <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleText}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={handleAmount} placeholder="Enter amount..." />
        </div>
        <button onClick={(event)=>{
          event.preventDefault()
          const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text:text,
            amount:+amount
          }
          addTransaction(newTransaction)
        }} className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
