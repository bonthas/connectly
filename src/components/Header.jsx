import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('connectlyUser');
  };

  const getProfileImage = () => {
    if (user?.profileImage) {
      return <img src={user.profileImage} alt="Profile" className="profile-image-small" />;
    }
    return <div className="default-avatar">👤</div>;
  };

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
                <Link to="/profile" className="nav-link profile-link">
                  {getProfileImage()}
                  <span>Profile</span>
                </Link>
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