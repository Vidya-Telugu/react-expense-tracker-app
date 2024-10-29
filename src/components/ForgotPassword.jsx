import React, { useState } from 'react'
import axios from "axios";
import "./ForgotPassword.css"
import { Link } from 'react-router-dom';
function ForgotPassword() {
    const [email,setEmail]=useState();
    async function handleSendEmail(e){
        e.preventDefault();
       const url="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
       try{
        const response=await axios.post(url,{
          requestType:"PASSWORD_RESET",
          email:email,
        })
        console.log(response.data);
       }catch(error){
        alert(error?.response?.data?.message)
       }
    }
  return (
    <div className='main-container'>
      <form onSubmit={handleSendEmail} className='form-container'>
        <p>Enter the email with which you have registered</p>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}></input>
        <button type="submit" className='sendlink-btn'>Send Link</button>
      </form>
      <p>Already a user?<Link to="/login">login</Link></p>
    </div>
  )
}

export default ForgotPassword
