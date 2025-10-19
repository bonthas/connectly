import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Connectly</h1>
          </Link>
          
          <nav className="nav">
            {user ? (
              <>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/" className="nav-link">Login</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header