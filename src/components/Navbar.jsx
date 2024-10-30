import React from 'react'
import LogoType from '../assets/pictures/Logo.svg'
import ToggleSwitch from './ToggleSwitch.jsx'
import { Link, NavLink, useLocation } from 'react-router-dom'


const Navbar = () => {

    const location = useLocation()
    const isContactPage = location.pathname === '/contact';


  return (

    <nav className={isContactPage ? 'navbarbg navbarbg-contact' : 'navbarbg'}>
        <div className="navbar container">
            <div className="main-menu">
                <Link className="display-flex" to="/home">
                    <div className="mainlogo">
                        <img src={LogoType} />
                        <h2 className="mainlogo">Silicon</h2>
                    </div>
                </Link>
                <NavLink className="features-menu" to="/#features"><span className="features-link underlined-link">Features</span></NavLink>
                <NavLink className="features-menu" to="/contact"><span className="features-link underlined-link">Contact</span></NavLink>
            </div>
            
            <div className="navigation">
                <div className="navigation-tablet">

                    <ToggleSwitch />
                    
                </div>
                <a id="auth-signin" href="#" className="btn-primary text-signin">
                <i className="fa-thin fa-user-large"></i>
                <span className="underlined-link">Sign in / up</span>
                </a>
                <a href="#" className="hamburger">
                <i className="fa-solid fa-bars"></i>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar