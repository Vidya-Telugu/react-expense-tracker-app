import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Login.css";
import axios from "axios";
function Login() {
    const navigate=useNavigate();
    const[isLogin,setIsLogin]=useState(false);
    const[user,setUser]=useState({Email:"",Password:""});
    function handleUser(e){
       setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    useEffect(()=>{
        if(isLogin){
            navigate("/expenseform");
        }
    },[navigate,isLogin])
    async function handleSubmit(e){
        e.preventDefault();
        const{Email,Password}=user;
        const url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
        try{
          const response=await axios.post(url,{
            email:Email,
            password:Password,
            returnSecureToken:true,
          });
          setUser({Email:"",Password:""});
          const token=response.data.idToken;
          console.log(token)
          localStorage.setItem("token",token);
          const data=localStorage.getItem("token");
          console.log(data);
          setIsLogin(true);
        }catch(error){
            alert(error.response?.data?.error?.message);
        }
    }
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit} className='login-container'>
        <h3>Login</h3>
        <input type="email" className="login-input" value={user.Email}  name="Email" onChange={handleUser} placeholder='Email'></input>
        <input className="login-input" type="password" value={user.Password} name="Password" onChange={handleUser} placeholder='Password'></input>
        <button type="submit" className='login'>Login</button>
        <Link to="/forgotpassword"><p>Forgot Password?</p></Link>
      </form>
      <div className='sign-up'>
        Don't have an account?<Link to="/signup">Sign up.</Link>
      </div>
    </div>
  )
}

export default Login
