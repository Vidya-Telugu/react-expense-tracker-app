import React, { useState,useEffect} from 'react'
import Expenses from './Expenses';
import "./ExpenseForm.css"
import { setExpenses,updateExpense} from '../features/expenseSlice';
//import {useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch} from 'react-redux';
function ExpenseForm() {
  const dispatch=useDispatch();
  const[isOpen,setIsOpen]=useState(false);
  const [form,setForm]=useState({Amount:"",Description:"",Category:""});
  //const {SavedExpenses}=useSelector(state=>state.Expenses);
  function handleIsOpen(){
    setIsOpen(true);
  }
  function handleIsClose(){
    setIsOpen(false);
  }
  function handleForm(e){
    setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  async function handleExpense(e){
    e.preventDefault();
    const url="https://expenses-b3e9f-default-rtdb.firebaseio.com/expenses.json";
    try{
      if(form.name){
        dispatch(updateExpense(form));
        const url=await axios.put(url,form);
        setForm({Amount:"",Description:"",Category:"",name:""})
      }else{
      const response=await axios.post(url,form);
      console.log(response.data)
      const newExpense={...form,name:response.data.name}
      dispatch(setExpenses(newExpense));
      setForm({Amount:"",Description:"",Category:""});
      }
    }catch(error){
        alert(error.message);
    }
  }
  function handleEditExpense(expense){
      setForm(
        {Amount:expense.Amount,
        Description:expense.Description,
        Category:expense.Category,
        name:expense.name}
      );
  }
  return (
    <div className='expense-form-container'>
      <form onSubmit={handleExpense} className='expense-form'>
        <label htmlFor='Amount'>Amount</label>
        <input type="number" id="Amount" name="Amount" value={form.Amount} onChange={handleForm} required></input>
        <label htmlFor="Description">Description</label>
        <input type="text" id="Description" name="Description" value={form.Description} onChange={handleForm} required></input>
        <label htmlFor='Category'>Category</label>
        <select  id="Category" value={form.Category} name="Category" onChange={handleForm} required>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Petrol">Petrol</option>
            <option value="Groceries">Groceries</option>
        </select>
        <button type="submit">Add Expense</button>
        <button onClick={handleIsOpen} type="button">Show Expenses</button>
      </form>
      {
        isOpen?<Expenses onClose={handleIsClose} onEdit={handleEditExpense}></Expenses>:""
      }
    </div>
  )
}

export default ExpenseForm
