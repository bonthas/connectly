import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Feed from './components/Feed'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [user, setUser] = useState(() => {
    // Check if user data exists in localStorage
    const savedUser = localStorage.getItem('connectlyUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('connectlyUser', JSON.stringify(userData));
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={updateUser} />
        <Routes>
          <Route path="/" element={user ? <Feed user={user} /> : <Login setUser={updateUser} />} />
          <Route path="/profile" element={user ? <Profile user={user} updateUser={updateUser} /> : <Login setUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App