import React, { useContext } from 'react'
import { tp } from './App'

function TransactionList(props){

  const {transactions,deleteTransaction}=useContext(tp)
  


  return (
    <div>
    <h3>History</h3>
      <ul id="list" className="list">

      {transactions.map((tran)=>{
        const sign = tran.amount < 0 ? '-' : '+';
        return  <li key={tran.id} className={tran.amount<0?"minus":"plus"}>
          {tran.text}<span>{sign}{Math.abs(tran.amount)}</span><button onClick={()=>deleteTransaction(tran.id)}  className="delete-btn">x</button>
        </li> 
      })}

      
      </ul>
    </div>
  )
}




export default TransactionList