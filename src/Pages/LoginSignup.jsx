import React from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import Shop from './Shop'



const LoginSignup = () => {
  const navigate = useNavigate();

  const handleContinue = ()=>{
    navigate ('/')
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' required/>
          <input type="email" placeholder='Email Adress' required />
          <input type="password" placeholder='Password'/>
        </div>
        <button onClick={handleContinue}>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="#">Login Here</Link>
        </p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup