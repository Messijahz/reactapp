import React from 'react'
import ArrowDown from '../assets/pictures/arrow-down-info.svg'
import ArrowUp from '../assets/pictures/arrow-up-info.svg'
import PhoneCallIcon from '../assets/pictures/phonecallicon.svg'
import ChatIcon from '../assets/pictures/chaticon.svg'

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

            <div className="information-box-container">
                <div className="information-box">
                    <h4>Is any of my personal information stored in the App?</h4>
                    <div className="buttons-container-faq">
                        <button className="arrow-down-btn-grey hide-me-mobile">
                        <img src={ArrowDown} alt="An arrow down button" />
                        </button>
                        <button className="arrow-down-btn-blue hide-me-tablet">
                        <img src={ArrowUp} alt="An arrow up button" />
                        </button>
                    </div>
                </div>
                <div className="hide-me-tablet">
                    <div className="information-box2">
                        <p className="open-box-info">
                        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                        Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                        adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
                        fermentum duis accumsan lectus non. Massa cursus molestie lorem
                        scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
                        euismod montes, duis egestas. Vehicula eu etiam quam tristique
                        tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim
                        ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
                        Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                        Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                        Dignissim amet adipiscing massa integer.
                        </p>
                    </div>
                </div>
                <div className="information-box">
                    <h4>What formats can I download my transaction history in?</h4>
                    <div className="buttons-container-faq">
                        <button className="arrow-down-btn-grey">
                        <img src={ArrowDown} alt="An arrow down button" />
                        </button>
                    </div>
                </div>
                <div className="information-box2">
                    <div className="open-box">
                        <h4>Can I schedule future transfers?</h4>
                        <div className="buttons-container-faq">
                            <button className="arrow-down-btn-grey hide-me-tablet">
                            <img src={ArrowDown} alt="An arrow down button" />
                            </button>
                            <button className="arrow-down-btn-blue hide-me-mobile">
                            <img src={ArrowUp} alt="An arrow up button" />
                            </button>
                        </div>
                    </div>
                    <div className="hide-me-mobile">
                        <p className="open-box-info">
                        Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                        </p>
                    </div>
                </div>
                <div className="information-box">
                    <h4>When can I use Banking App services?</h4>
                        <div className="buttons-container-faq">
                            <button className="arrow-down-btn-grey">
                            <img src={ArrowDown} alt="An arrow down button" />
                            </button>
                        </div>
                    </div>
                    <div className="information-box">
                        <h4>Can I create my own password that is easy for me to remember?</h4>
                        <div className="buttons-container-faq">
                            <button className="arrow-down-btn-grey">
                            <img src={ArrowDown} alt="An arrow down button" />
                            </button>
                        </div>
                    </div>
                    <div className="information-box">
                        <h4>What happens if I forget or lose my password?</h4>
                        <div className="buttons-container-faq">
                            <button className="arrow-down-btn-grey">
                            <img src={ArrowDown} alt="An arrow down button" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hide-me-mobile">
                    <div className="contact-box-container">
                        <div className="contact-box">
                            <img src={PhoneCallIcon} alt="An icon of a phone" />
                            <p>Still have  questions?</p>
                            <div className="flex-center">
                                <a href="contact.html" className="purple-text">
                                <span className="underlined-link">Contact us</span>
                                <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="contact-box">
                            <img src={ChatIcon} alt="An icon of a chat bubble" />
                            <p>Don't like phone calls?</p>
                            <div className="flex-center">
                                <a href="/contact.html" className="green-text">
                                <span className="underlined-link">Contact us</span>
                                <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

  )
}

export default Faq