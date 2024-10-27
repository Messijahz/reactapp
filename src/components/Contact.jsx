import React from 'react'
import Notification from '../assets/pictures/notification-icon-1.svg'
import EmailForm from './HandleSubmit'

const Contact = () => {
  return (
    
    <section className="contact">
        <div className="container">
            <div className="contact-container">
                <a href="#">
                <button className="contact-btn">Contact us now</button>
                </a>
            </div>

            <div className="newsletter-card">
                <div className="newsletter-container">
                    <div className="subscribe-info">
                        <img
                        src={Notification}
                        alt="notifications bell" />          
                        <div className="subscribe-text">
                            <h3 className="contact hide-me-desktop">Subscribe to our newsletter</h3>
                            <h3 className="hide-me-mobile-tablet">Subscribe to our newsletter to stay informed about latest updates</h3>
                        </div>
                    </div>

                    <EmailForm /> 
                    
                </div>
            </div>
        </div>
    </section>

  )
}

export default Contact