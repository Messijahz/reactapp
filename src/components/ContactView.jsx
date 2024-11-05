import React from 'react'
import EnvelopeIcon from '../assets/pictures/bx-envelope.svg'
import PeopleIcon from '../assets/pictures/people-icon.svg'
import ContactViewForm from './ContactViewForm'

const ContactView = () => {
  return (
    <section id="contact" className="container">
        <div className="contact-info-container">
            <div className="header-contact">
                <h1 className="text-left hide-me-mobile-tablet">Contact Us</h1>
            </div>
            <div className="contact-card-container">
                <div className="contact-card">
                    <div className="circle">
                        <img
                        src={EnvelopeIcon}
                        alt="A picture of a letter" />
                    </div>
                    <div className="contact-text">
                        <h3 className="text-left">Email us</h3>
                        <p>
                         Please feel free to drop us a line. We will respond as soon as
                         possible.
                        </p>
                        <a href="#" className="purple-text">
                            <span className="underlined-link">Leave a message</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

          <div className="contact-card-container">
            <div className="contact-card">
              <div className="circle">
                <img src={PeopleIcon} alt="A group of people" />
              </div>
              <div className="contact-text">
                <h3 className="text-left">Careers</h3>
                <p>
                  Sit ac ipsum leo lorem magna nunc mattis maecenas non
                  vestibulum.
                </p>
                <a href="#" className="purple-text">
                  <span className="underlined-link">Send an application</span>
                  <i className="fa-solid fa-arrow-right padding-bottom-6"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ContactViewForm />
        
      </section>
  )
}

export default ContactView