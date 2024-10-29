import React from 'react'
import axios from "axios";



function VerifyEmail() {

  async function handleVerifyEmail(){
    const url="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
    const token=localStorage.getItem("token");
    if(!token){
        console.log("No user logged in currently")
    }
     try{
        const response=await axios.post(url,{
           requestType:"VERIFY_EMAIL",
           idToken:token,
        })
        console.log(response.data)
     }catch(error){
        console.log(error.message);
     }
  }
  return (
    <div>
     <button onClick={handleVerifyEmail}>Verify Email</button>
    </div>
  )
}

export default VerifyEmail
