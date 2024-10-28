import React,{useState} from 'react';
import axios from "axios";
import "./Signup.css";
function signup() {
  const[user,setUser]=useState({Email:"",Password:"",ConfirmPassword:""});
  function handleUser(e){
    setUser((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  async function handleSubmit(e){
    e.preventDefault();
    const {Email,Password}=user;
    const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
     try{
       const response=await axios.post(url,{
        email:Email,
        password:Password,
        returnSecureToken:true,
       })
       const token=response.data.idToken;
       localStorage.setItem("token",token);
       const details=localStorage.getItem("token");
       console.log(details);
       setUser({Email:"",Password:"",ConfirmPassword:""});
       alert("Account created successfully");
     }catch(error){
      alert(error.message);
     }
  }
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <h3>SignUP</h3>
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" placeholder="Email" onChange={handleUser}></input>
        <label htmlFor='Password'>Password</label>
        <input type="password" name="Password" placeholder='Password' onChange={handleUser}></input>
        <label htmlFor='ConfirmPassword'>Confirm Password</label>
        <input type="password" name="ConfirmPassword" placeholder='Confirm Password' onChange={handleUser}></input>
        <button type="submit">Sign up</button>
      </form>
      <div className='login-div'>
        Have an account?Login
      </div>
    </div>
  )
}

export default signup
