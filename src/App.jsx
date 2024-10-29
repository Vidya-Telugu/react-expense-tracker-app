import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Profile from "./components/Profile"
import VerifyEmail from "./components/VerifyEmail"
import ForgotPassword from "./components/ForgotPassword"
import ExpenseForm from "./components/ExpenseForm"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login></Login>}/>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/welcome" element={<Welcome></Welcome>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path="/verifyEmail" element={<VerifyEmail></VerifyEmail>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/expenseform" element={<ExpenseForm></ExpenseForm>}></Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
