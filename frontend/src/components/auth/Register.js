import React, { useState } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value}) // Update object properties with their values
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if(password !== password2) {
      setAlert('Password do not match', 'danger');
    }

    else {
      console.log('Successfully Registered')
    }
  }

  return (
    <>
    <h1 className="large text-primary">Sign Up</h1>
    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name}
          required
          onChange={e => onChange(e)} 
          />
      </div>
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
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password" 
          name="password2" 
          value={password2}
          required
          onChange={e => onChange(e)} 
          minLength='6'
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
    <p className="my-1">
      Already have an account? <Link to="/login" >Sign In</Link>
    </p>
  </>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, {setAlert})(Register);
