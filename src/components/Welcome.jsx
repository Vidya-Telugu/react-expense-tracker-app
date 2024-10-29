import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile';
import "./Welcome.css"
function Welcome() {
  const[isOpen,setIsopen]=useState(false);
  function handleIsOpen(){
    setIsopen(true);
  }
  function handleClose(){
    setIsopen(false)
  }
  return (
    <div>
      <div className='nav'>
      <div><h1>Welcome to expense tracker app</h1></div>
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
