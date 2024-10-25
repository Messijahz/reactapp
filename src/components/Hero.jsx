import React from 'react'
import GooglePlay from '../assets/pictures/googleplay-light.svg'
import MobileBack from '../assets/pictures/mobile-back.svg'
import MobileFront from '../assets/pictures/mobile-front.svg'



const Hero = () => {
  return (
    
    <section id="hero">
      <div className="hero-container container">
        <div className="hero-headline">
          <h1>Manage All Your Money in One App</h1>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <p className="hide-me-tablet hide-me-desktop">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <p className="hide-me-mobile">We offer you a new generation of the mobile banking.</p>
            <p className="hide-me-mobile">Save, spend & manage money in your pocket.</p>
          </div>

          <div className="flex-buttons-center">
            <a href="https://www.apple.com/se/app-store/" target="_blank" alt="Download on the apple app store">
              <div className="btn-container">
                <div className="btn-logo">
                  <i className="fa-brands fa-apple"></i>
                  <div className="btn-text">
                    <span className="btn-text">Download on the</span>
                    <span className="btn-text2">App Store</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://play.google.com/store" target="_blank" alt="Download on google play">
              <div className="btn-container">
                <div className="btn-logo">
                  <img src={GooglePlay} />
                  <div className="btn-text">
                    <span className="btn-text">GET IT ON</span>
                    <span className="btn-text2">Google Play</span>
                  </div>
                </div>
              </div>
            </a>
        </div>


          
        <div className="discover-more">
          <a className="link" href="#faq">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span className="hero-span underlined-link">Discover more</span>
          </a>
        </div>
      </div>

        <div className="hero-images">
          <img
            src={MobileBack}
            alt="two mobiles"
            className="image-back"
          />
          <img
            src={MobileFront}
            alt="two mobiles"
            className="image-front"
          />
        </div>
      </div>
    
    </section>

  )
}

export default Hero