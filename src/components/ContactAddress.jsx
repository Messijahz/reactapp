import React from 'react'
import FacebookLogo from '../assets/pictures/bxl-facebook-square.svg'
import InstagramLogo from '../assets/pictures/bxl-instagram-alt.svg'
import TwitterLogo from '../assets/pictures/bxl-twitter.svg'
import YoutubeLogo from '../assets/pictures/bxl-youtube.svg'
import MapIcon from '../assets/pictures/bx-map.svg'
import PhoneIcon from '../assets/pictures/bx-phone-call.svg'
import TimeIcon from '../assets/pictures/bx-time-five.svg'

const ContactAddress = () => {
  return (
    <section id="contact-address">
        <div className="address-container container">
        <div id="map-info">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6311.249394964277!2d-122.41400263221898!3d37.72848629910108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f02449cda7b%3A0x56b4d414afddd65!2sSilver%20Terrace%2C%20San%20Francisco%2C%20Kalifornien%2094124%2C%20USA!5e0!3m2!1ssv!2sse!4v1729352777968!5m2!1ssv!2sse"
              allowFullScreen="" 
              loading="lazy">
            </iframe>
        </div>
     


    
        <div className="address-info">
            <div className="address-box">
                <h4>Medical Center 1</h4>
                    <div className="info-row">
                        <img src={MapIcon} alt="map icon" />
                        <span>4517 Washington Ave. Manchester, Kentucky 3949span</span>
                    </div>
                <div className="info-row">
                    <img src={PhoneIcon} alt="phone icon" />
                    <span>(406) 555-0120</span>
                </div>
                <div className="info-row">
                    <img src={TimeIcon} alt="time icon" />
                    <span className="strong">Mon - Fri:</span><span> 9:00 am - 22:00 am</span>
                </div>
                <div className="info-row">
                    <span className="strong ml28px">Sat - Sun:</span><span> 9:00 am - 20:00 am</span>
                </div>
            </div>

            <div className="address-box">
                <h4>Medical Center 2</h4>
                    <div className="info-row">
                        <img src={MapIcon} alt="map icon" />
                        <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
                    </div>
                    <div className="info-row">
                        <img src={PhoneIcon} alt="phone icon" />
                        <span>(406) 544-0123</span>
                    </div>
                    <div className="info-row">
                        <img src={TimeIcon} alt="time icon" />
                        <span className="strong">Mon - Fri:</span><span> 9:00 am - 22:00 am</span>
                    </div>
                    <div className="info-row ml28px">
                        <span className="strong">Sat - Sun:</span><span> 9:00 am - 20:00 am</span> 
                    </div>
            </div>


                <div className="social-media-box">
                    <a href='https://facebook.com/silicon' target='_blank'> 
                    <div className="social-media">
                        <img src={FacebookLogo} alt="" />
                    </div>
                    </a>
                    
                    <a href='https://instagram.com/silicon' target='_blank'>
                    <div className="social-media">
                        <img src={InstagramLogo} alt="" />
                    </div>
                    </a>

                    <a href='https://x.com/silicon' target='_blank'>
                    <div className="social-media">
                        <img src={TwitterLogo} alt="" />
                    </div>
                    </a>

                    <a href='https://youtube.com/silicon' target='_blank'>
                    <div className="social-media">
                        <img src={YoutubeLogo} alt="" />
                    </div>
                    </a>

                </div>

             </div>
        </div>
    </section>
  )
}

export default ContactAddress