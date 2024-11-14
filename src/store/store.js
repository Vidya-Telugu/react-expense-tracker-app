import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import expenseReducer from "../features/expenseSlice"
import themeReducer from "../features/expenseSlice"
const store=configureStore({
    reducer:{
      authentication:authReducer,
      expenses:expenseReducer,
      themename:themeReducer,
    }
})

export default store;