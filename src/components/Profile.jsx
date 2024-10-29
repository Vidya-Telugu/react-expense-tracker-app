import { useEffect, useState } from "react";
import "./Profile.css"
import axios from "axios";
function Profile({onClose}) {
    const[details,setDetails]=useState({FullName:"",Profiledetail:""});
    function handleDetails(e){
        setDetails((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    async function handleUpdateDetails(e){
        e.preventDefault();
        try{
        const url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck";
        const idToken=localStorage.getItem("token");
        const response=await axios.post(url,{
            idToken:idToken,
            displayName:details.FullName,
            photoURL:details.Profiledetail,
            returnSecureToken:true,
        })
        console.log(response.data);
        const token=response.data.idToken;
        localStorage.setItem("token",token);
        const t=localStorage.getItem("token");
        console.log(t);
      }catch(error){
       console.log(error.message)
      }
    }
    useEffect(()=>async function fetchUserData(){
      const token=localStorage.getItem("token");
      if(token){
        const url="https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDBIp34zyiCcPid-PMHLuzH5bimlLyOAck"
        try{
         const response=await axios.get(url,{idToken:token});
         const userData=response.data.users[0];
         if(userData){
          setDetails({
            FullName:userData.displayName||"",
            Profiledetail:userData.photoURL||"",
          })
         }
        }catch(error){
        console.log(error.message)
      }
    }
    fetchUserData();
    },[])
  return (
    <div className="profile-container">
      <div>
         <form onSubmit={handleUpdateDetails}  className='contact-details'>
            <div className="heading-cancel">
            <h3>Contact Details</h3>
            <button className="cancel-btn" type="button" onClick={onClose}>Cancel</button>
           </div>       
           <div className="input-fields">
           <div>
           <label htmlFor="FullName">FullName</label>
           <input type="text" name="FullName" value={details.FullName} onChange={handleDetails}></input>
           </div>
           <div>
           <label htmlFor="Profiledetail">Details</label>
           <input type="text" name="Profiledetail" value={details.Profiledetail} onChange={handleDetails}></input>
           </div>   
           </div>     
         <button type="submit" className="update-btn">Update</button>
         </form>
      </div> 
    </div>
  )
}

export default Profile
