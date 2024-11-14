import { createSlice } from "@reduxjs/toolkit";

const initialState={
    SavedExpenses:[],
    isPremium:false,
    total:0,
};
const expenseSlice=createSlice({
    name:"expenses",
    initialState:initialState,
    reducers:{
        setExpenses:(state,action)=>{
            state.SavedExpenses.push(action.payload);
            state.total=state.SavedExpenses.reduce((sum,expense)=>sum+Number(expense.Amount),0);
            state.isPremium=10000<state.total
        },
        deleteExpense:(state,action)=>{
            const updatedExpenses=state.SavedExpenses.filter((expense)=>expense.name!=action.payload);
            state.SavedExpenses=[...updatedExpenses],
            state.total=state.SavedExpenses.reduce((sum,expense)=>sum+Number(expense.Amount),0);
            state.isPremium=state.total>1000
        },
        updateExpense:(state,action)=>{
             const index=state.SavedExpenses.findIndex((expense)=>expense.name==action.payload.name);
             if(index!=-1){
                state.SavedExpenses[index]=action.payload;
             }
             state.total=state.SavedExpenses.reduce((sum,expense)=>sum+Number(expense.Amount),0);
             state.isPremium=state.total>1000
        }
    }
});
export const {setExpenses,updateExpense,deleteExpense}=expenseSlice.actions;
export default expenseSlice.reducer;