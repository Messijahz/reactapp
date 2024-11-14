import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className="navbar2 container">
        
          <i className="fa-solid fa-house"></i>
          <NavLink to="/home"><p>Homepage</p></NavLink>
        
          <i className="fa-solid fa-angles-right"></i>
          <NavLink to="/contact"><p>Contact</p></NavLink>
        </div>
  )
}

export default Navbar2