import React, { useEffect } from 'react'
import "./Expenses.css";
//import axios from "axios"
import { useState } from 'react';
import { deleteExpense} from '../features/expenseSlice';
import { useDispatch, useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
function Expenses({onClose,onEdit}) {
  const dispatch=useDispatch();
  const {theme}=useSelector(state=>state.themename.theme);
  const[activate,setActivate]=useState(false);
  const {SavedExpenses,isPremium} = useSelector(state => state.expenses);
  useEffect(()=>{
    document.body.className=theme==="dark"?"light-theme":"dark-theme";
  },[theme]);
  function handleDeleteExpense(expense){
    dispatch(deleteExpense(expense.name));
  }
  function handleEdit(expense){
         onEdit(expense);
  }
  function handleDownloadCSV(){
    const headers=["Category","Description","Amount"];
    const rows=[];
    SavedExpenses.forEach((expense)=>{
      rows.push([expense.Category,expense.Description,expense.Amount]);
    })
    const csvContent=[headers,...rows].map((row)=>row.join(",")).join("\n");
    const blob=new Blob([csvContent],{type:"text/csv"});
    saveAs(blob,"expenses.csv");
  };
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
           SavedExpenses.map((expense, index) => {
              return (
                <tr key={index}>
                  <td>{expense.Category}</td>
                  <td>{expense.Description}</td>
                  <td>{expense.Amount}</td>
                  <td><button className='del-btn' onClick={() => handleDeleteExpense(expense)}>Delete</button></td>
                  <td><button className='edit-btn' onClick={()=>handleEdit(expense)} >Edit</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={onClose} className='close-btn'>Close</button>
      {
        isPremium && <button onClick={()=>setActivate(true)}>Activate Premium</button>
      }
      {
        activate && <><button>Dark</button>   <button onClick={handleDownloadCSV}>Download CSV</button> </>
      }
    </div>
  )
}

export default Expenses
