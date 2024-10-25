import React from 'react'
import LogoType from '../assets/pictures/Logo.svg'

const Navbar = () => {
  return (

    <nav>
        <div className="navbar container">
            <div className="main-menu">
                <a href="index.html" className="display-flex">
                    <div className="mainlogo">
                        <img src={LogoType} />
                        <h2 className="mainlogo">Silicon</h2>
                    </div>
                </a>
                <a className="features-menu" href="#features"><span className="features-link underlined-link">Features</span></a>
                <a className="features-menu" href="contact.html"><span className="features-link underlined-link">Contact</span></a>
            </div>
            
            <div className="navigation">
                <div className="navigation-tablet">
                    <p className="darkmode">Dark Mode</p>
                        <div className="toggle-switch">
                            <div className="toggle-circle">

                            </div>
                        </div>
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