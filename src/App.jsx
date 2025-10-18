import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Feed from './components/Feed'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={user ? <Feed /> : <Login setUser={setUser} />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App