import React from 'react'
import { NavLink } from 'react-router-dom'
import PhoneCallIcon from '../assets/pictures/phonecallicon.svg'
import ChatIcon from '../assets/pictures/chaticon.svg'

import FaqList from './FaqList'

const Faq = () => {
  return (
    
    <section id="faq" className="container">
        <div className="faq-container">
            <div className="faq-heading-desktop-container">
                <div className="faq-heading-wrapper">
                    <h2>Any questions? Check out the FAQs</h2>
                    <h3>Still have unanswered questions and need to get in touch?</h3>
                </div>
            </div>

            <FaqList />

                <div className="hide-me-mobile">
                    <div className="contact-box-container">
                        <div className="contact-box">
                            <img src={PhoneCallIcon} alt="An icon of a phone" />
                            <p>Still have  questions?</p>
                            <div className="flex-center">
                                <NavLink className="purple-text" to="/contact"> 
                                <span className="underlined-link">Contact us</span>
                                <i className="fa-solid fa-arrow-right"></i>
                                </NavLink>
                            </div>
                        </div>
                        <div className="contact-box">
                            <img src={ChatIcon} alt="An icon of a chat bubble" />
                            <p>Don't like phone calls?</p>
                            <div className="flex-center">
                                
                                <NavLink className="green-text" to="/contact">
                                <span className="underlined-link">Contact us</span>
                                <i className="fa-solid fa-arrow-right"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

  )
}

export default Faq