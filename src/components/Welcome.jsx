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
    alert("User Logged Out Successfully")
  }
  useEffect(()=>{
    if(isLogout){
      navigate("/login");
    }
  },[isLogout]);
  return (
    <div>
      <div className='nav' >
      <div><h1 className='welcome-heading'>Welcome to expense tracker app</h1></div>
      <span className="toggle-container">
        </span>
      <button onClick={handleLogOut} className='logout-btn'>Logout</button>
      <p className='profile-text'>Your profile is incomplete<button onClick={handleIsOpen} className="complete-now">Complete now</button></p>
      <div>
        <Link to="/verifyEmail"><span className='verifyemail'>Verify Email</span></Link>
      </div>
      </div> 
      {
        isOpen?<Profile onClose={handleClose}></Profile>:""
      }
    </div>
  )
}
export default Welcome
