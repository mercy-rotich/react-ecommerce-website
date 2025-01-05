import React, { useState } from 'react'
import './CSS/SignUp.css'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = () => {
    const navigate = useNavigate();
   

   /*  const handleContinue =()=>{
        navigate("/")
    } */
   const [userData,setUserData] =useState({
    email:"",
    password:""
   })

   const onChange = (e)=>{
    const {name,value}= e.target;
    setUserData((prevData)=>({
        ...prevData,
        [name]:value,
    }))
   };


   const handleContinue = (e)=>{
    e.preventDefault();

    if(
        userData.email.trim() === "" ||
        userData.password.trim() === ""
    ){
        Swal.fire({
            icon:"error",
            text:"access denied",
            confirmButtonText:"OK",
        });
        return;


    }
    else{
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (user)=>
                user.email === userData.email && user.password === userData.password

        );

        if(!user){
            Swal.fire({
                icon:"error",
                text:"wrong credentials",
                confirmButtonText:"OK"
            });
            return;
        }
        else{
            Swal.fire({
                icon:"success",
                text:"access granted",
                confirmButtonText:"OK,"
            }).then(()=>{
                navigate('/')
            })
        }
    }
   }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          
          <input type="email" name='email' placeholder='Email Adress' onChange={onChange} required />
          <input type="password" name='password' placeholder='Password' onChange={onChange}/>
        </div>
        <button onClick={handleContinue}>Continue</button>
        
        
        <p className="loginsignup-login">
          Does not have an account? <Link to="/signup">Create an account</Link>
        </p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login