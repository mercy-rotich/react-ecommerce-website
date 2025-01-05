import React, { useState } from 'react';
import './CSS/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSignUp = (e) => {
    e.preventDefault();
    if (
      userData.username.trim() === "" ||
      userData.email.trim() === "" ||
      userData.password.trim() === "" ||
      userData.confirmpassword.trim() === "" ||
      userData.password !== userData.confirmpassword
    ) {
      
      return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserIn = users.some((user) => user.email === userData.email);
    if (isUserIn) {
      Swal.fire({
        icon: "error",
        text: "User already exists, proceed to login",
        confirmButtonText: "OK",
      });
      return;
    } else {
      const newUser = {
        id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
        ...userData,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      Swal.fire({
        icon: "success",
        title: "REGISTERED SUCCESSFULLY",
        confirmButtonText: "OK",
      }).then(() => {
        navigate('/login');
      });
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={onSignUp} className="loginsignup-fields">
          <input
            type="text"
            placeholder='Enter your name'
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder='Email Address'
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder='Confirm your Password'
            name="confirmpassword"
            value={userData.confirmpassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
