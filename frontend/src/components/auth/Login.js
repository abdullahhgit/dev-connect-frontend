import React, { useState } from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value}) // Update object properties with their values
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      console.log('Successfully Login')
      // const newUser = {
      //   name,
      //   email,
      //   password,
      // }

      // try {
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   }

      //   const body = JSON.stringify(newUser);

      //   const response = await axios.post('/api/users', body, config);
      //   console.log(response.data);
      // } 
      
      // catch (error) {
      //   console.error(error.response.data);
      // }
  }

  return (
    <>
    <h1 className="large text-primary">Sign In</h1>
    <p className="lead"><i className="fas fa-user"></i> Sign In Your Account</p>
    <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <input type="email" 
          placeholder="Email" 
          name="email" 
          value={email}
          required
          onChange={e => onChange(e)} 
          />
        <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
          Gravatar email</small
        >
      </div>
      <div className="form-group">
      <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          value={password}
          required
          onChange={e => onChange(e)} 
          minLength='6'
          />
      </div>
      <input type="submit" className="btn btn-primary" value="Login" />
    </form>
    <p className="my-1">
      Don't have an Account <Link to="/register" >Sign Up</Link>
    </p>
  </>
  )
}

export default Login;
