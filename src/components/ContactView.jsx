import React from 'react'
import EnvelopeIcon from '../assets/pictures/bx-envelope.svg'
import PeopleIcon from '../assets/pictures/people-icon.svg'

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

          <div className="consulation-box">
            <h2>Get Online Consultation</h2>

            <form action="/submit" method="POST">
              <label htmlFor="name">Full name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email address:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="speciality">Specialist:</label>
              <select id="speciality" name="speciality" required>
                <option value="" disabled></option>
                <option value="webdev">Web Development</option>
                <option value="graphicdesign">Graphic Design</option>
                <option value="datascience">Data Science</option>
                <option value="marketing">Marketing</option>
              </select>

              <button type="submit" className="btn-primary">Make an appointment</button>
            </form>
          </div>
      </section>
  )
}

export default ContactView