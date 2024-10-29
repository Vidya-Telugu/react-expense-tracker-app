import React from 'react'
import "./Expenses.css";
function Expenses({expenses,onClose,setExpenses}) {
  function handleDeleteExpense(index){
    const updatedExpenses=expenses.filter((_,i)=>i!==index);
      setExpenses(updatedExpenses);
  }
  return (
    <div className='expenses-table-container'>
      <table cellPadding="5" cellSpacing="5" border={2}>
        <thead>
          <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense,index)=>{
              return (
                <tr key={index}>
                  <td>{expense.Category}</td>
                  <td>{expense.Description}</td>
                  <td>{expense.Amount}</td>
                  <td><button className='del-btn' onClick={()=>handleDeleteExpense(index)}>Delete</button></td>
                  <td><button className='edit-btn'>Edit</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={onClose} className='close-btn'>Close</button>
    </div>
  )
}

export default Expenses
