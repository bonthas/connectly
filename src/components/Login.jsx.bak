import React, { useState } from 'react'
import './Login.css'

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const [isSignUp, setIsSignUp] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login/signup
    const user = {
      id: 1,
      firstName: isSignUp ? formData.firstName : 'John',
      lastName: isSignUp ? formData.lastName : 'Doe',
      email: formData.email
    }
    setUser(user)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignUp ? 'Create Account' : 'Log in to Connectly'}</h2>
        <p className="subtitle">Connect with friends and the world around you.</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          {isSignUp && (
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required={isSignUp}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required={isSignUp}
              />
            </div>
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <button type="submit" className="btn btn-primary login-btn">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        
        <div className="divider"></div>
        
        <button 
          className="btn btn-secondary signup-btn"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Already have an account? Log in' : 'Create New Account'}
        </button>
      </div>
    </div>
  )
}

export default Login