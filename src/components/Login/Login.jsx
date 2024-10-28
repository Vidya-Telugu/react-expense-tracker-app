import React, { useState } from 'react'
import "./Login.css";
import axios from "axios";
function Login() {
    const[user,setUser]=useState({Email:"",Password:""});
    function handleUser(e){
       setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    async function handleSubmit(e){
        e.preventDefault();
        const{Email,Password}=user;
        const url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
        try{
          const response=await axios.post(url,{
            email:Email,
            password:Password,
            returnSecureToken:true,
          })
          const token=response.data.idToken;
          console.log(token)
          localStorage.setItem("token",token);
          const data=localStorage.getItem("token");
          console.log(data);
        }catch(error){
            alert(error.response?.data?.error?.message);
        }
    }
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input type="email"  name="Email" onChange={handleUser} placeholder='Email'></input>
        <input type="password" name="Password" onChange={handleUser} placeholder='Password'></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
