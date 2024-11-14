import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false,
    userID:"",
    token:"",
    userstatus:""
}
const authSlice=createSlice({
    name:"authentication",
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.userId=action.payload;
            state.token=action.payload;
        },
        logout:(state,action)=>{
             state.isAuthenticated=false;
        }
    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;

