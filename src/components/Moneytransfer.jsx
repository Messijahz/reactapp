import React from 'react'
import Inner from '../assets/pictures/inner.svg'
import Payments from '../assets/pictures/payments.svg'
import Cashback from '../assets/pictures/cashback.svg'
import Inner2 from '../assets/pictures/inner2.svg'
import Inner1Top from '../assets/pictures/inner-top.svg'
import Inner2Top from '../assets/pictures/inner2-top.svg'

const Moneytransfer = () => {
  return (
    
    <section id="moneytransfer" className="container">
        <div className="money-transfer-content">

            <div className="money-information1">
                <h2>Make your money transfer simple and clear</h2>
                <ul className="money-checked-list">
                    <li className="moneytransfer-text">Banking transactions are free for you</li>
                    <li className="moneytransfer-text">No monthly cash commission</li>
                    <li className="moneytransfer-text">Manage payments and transactions online</li>
                </ul>
                <a href="#" className="btn-primary btn-moneytransfer">
                    <span>Learn more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div className="money-images1">
                <img src={Inner} alt="A bank account with graphs" />
                <img className="inner-image1-top" src={Inner1Top} alt="" />
            </div>

            <div className="money-container">
                <div className="money-information2">
                <h2>Receive payment from international bank details</h2>
            </div>

            <div className="moneytransfer-logos-container">
                <div className="moneytransfer-logos">
                    <img src={Payments} alt="Icon of a Bank card" />
                </div>
                <p className="moneytransfer-text">
                Manage your payments online. Mollis congue egestas egestas fermentum fames.
                </p>
            </div>
            <div className="moneytransfer-logos-container">
                <div className="moneytransfer-logos">
                    <img src={Cashback} alt="Icon of a wallet" />
                </div>
                <p className="moneytransfer-text">
                A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                </p>
            </div>
                <a href="#" className="btn-primary btn-moneytransfer">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
                </a>
        </div>
        <div className="money-images2">
            <img src={Inner2} alt="Contact book on a phone" />
            <img className="inner-image2-top" src={Inner2Top} alt="" />
        </div>
        </div>
    </section>

  )
}

export default Moneytransfer