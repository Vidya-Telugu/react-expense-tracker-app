import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile';
import "./Welcome.css"
function Welcome() {
  const[isOpen,setIsopen]=useState(false);
  const navigate=useNavigate()
  const[isLogout,setIsLogout]=useState(false);
  function handleIsOpen(){
    setIsopen(true);
  }
  function handleClose(){
    setIsopen(false)
  }
  function handleLogOut(){
    localStorage.removeItem("token");
    setIsLogout(true);
  }
  useEffect(()=>{
    if(isLogout){
      navigate("/login");
    }
  },[isLogout]);
  return (
    <div>
      <div className='nav'>
      <div><h1>Welcome to expense tracker app</h1></div>
      <button onClick={handleLogOut}>Logout</button>
      <p>Your profile is incomplete<button onClick={handleIsOpen} className="complete-now">Complete now</button></p>

      </div>
      <div>
        <Link to="/verifyEmail">Verify Email</Link>
      </div>
      {
        isOpen?<Profile onClose={handleClose}></Profile>:""
      }
    </div>
  )
}

export default Welcome
