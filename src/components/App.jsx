import React, { useState,createContext } from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";










const tp=createContext(); 

function App(){

   const [transactions,setTransactions]=useState([])
    

  function deleteTransaction(id1){
  
       return setTransactions((pre)=>{
        return  pre.filter((trans)=>(trans.id !== id1))
       })
       
  }


  function addTransaction(newTransaction){

    return setTransactions((pre)=>{
        return [...pre,newTransaction]
    })
  }










    return (
<div>
<tp.Provider value={{transactions,deleteTransaction,addTransaction}}>
<Header/>

<div className="container">
<Balance/>
<IncomeExpenses/>
<TransactionList  />
<AddTransaction  />
</div>
    
</tp.Provider>




</div>

    )
}


export default App;

export {tp};