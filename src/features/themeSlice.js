import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"themename",
    initialState:{theme:"dark"},
    reducers:{
        setTheme:(state,action)=>{
            state.theme=state.theme==="dark"?"Light":"dark";
        }
    }
});

export const {setTheme}=themeSlice.actions();
export default themeSlice.reducer;