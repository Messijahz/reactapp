import React from 'react'
import Notification from '../assets/pictures/notification-icon-1.svg'

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

                    <div className="subscribe-form">
                        <form action="" method="get" className="contact-form">
                        <label className="contact-form" htmlFor="email"></label>
                        <div className="mail-icon-input">
                            <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" &#xf003;   Your Email"
                            style={{ fontFamily: "Arial, 'FontAwesome'" }}
                            required
                            autoComplete="email"
                            />
                        </div>
                        <button className="contact-btn-subscribe" type="submit">
                        Subscribe
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Contact