import React from 'react'
import './CSS/SignUp.css'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleContinue =()=>{
        navigate("/")
    }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          
          <input type="email" placeholder='Email Adress' required />
          <input type="password" placeholder='Password'/>
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