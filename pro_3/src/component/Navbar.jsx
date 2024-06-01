import React from 'react'
import { useContext } from 'react'
import { Themecontex } from '../contex/Themecontex'
import { AuthContext } from '../contex/AuthContext'

function Navbar() {
   const { theme } = useContext(Themecontex)
   const { user, Login, Logout } = useContext(AuthContext)

  return (
    <div className={`navbar ${theme}`}>
      <h1>Navbar</h1>
      <h2>Theme is {theme === "light" ? "light" : "dark"}</h2>
      <h2>User is {user ? "logged in" : "logged out"}</h2>
      <div className="buttons">
        <button className="login-btn" onClick={Login}>Login</button>
        <button className="logout-btn" onClick={Logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
