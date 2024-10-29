import React, { useState } from 'react'
import Expenses from './Expenses';
import "./ExpenseForm.css"
import axios from 'axios';
function ExpenseForm() {
  const[expenses,setExpenses]=useState([]);
  const[isOpen,setIsOpen]=useState(false);
  const[form,setForm]=useState({Amount:"",Description:"",Category:""});
  function handleForm(e){
      setForm((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  async function handleStoreExpenses(){
    const url="https://expenses-b3e9f-default-rtdb.firebaseio.com/expenses.json"
   try{
     const response=await axios.post(url,{
      Amount:form.Amount,
      Description:form.Description,
      Category:form.Category,
     });

     console.log(response.data);
   }catch(error){
     alert(error.message);
   }
  }
  function handleIsOpen(){
    setIsOpen(true);
  }
  function handleIsClose(){
    setIsOpen(false);
  }
  async function handleExpense(e){
    e.preventDefault();
    setExpenses((prev)=>([...prev,{...form}]));
    await handleStoreExpenses();
    setForm({Amount:'',Description:"",Category:""})
  }
  return (
    <div className='expense-form-container'>
      <form onSubmit={handleExpense} className='expense-form'>
        <label htmlFor='Amount'>Amount</label>
        <input type="number"  name="Amount" value={form.Amount} onChange={handleForm} required></input>
        <label htmlFor="Description">Description</label>
        <input type="text" name="Description" value={form.Description} onChange={handleForm} required></input>
        <label htmlFor='Category'>Category</label>
        <select value={form.Category} name="Category" onChange={handleForm} required>
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
        isOpen?<Expenses expenses={expenses} setExpenses={setExpenses} onClose={handleIsClose}></Expenses>:""
      }
    </div>
  )
}

export default ExpenseForm
