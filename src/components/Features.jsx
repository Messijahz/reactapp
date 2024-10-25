import React from 'react'
import Iphone12 from '../assets/pictures/iPhone12Pro.svg'
import Payments from '../assets/pictures/payments.svg'
import Security from '../assets/pictures/security.svg'
import Statistics from '../assets/pictures/statistics.svg'
import Support from '../assets/pictures/support.svg'
import Cashback from '../assets/pictures/cashback.svg'
import Happy from '../assets/pictures/happy.svg'

const Features = () => {
  return (
    
    <section id="features">
      <div className="features-grid-container container">
        <div className="app-features-headline">
          <h2>App Features</h2>
          <p className="features-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
              volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
        </div>
        <div className="iphone12image">
          <img className="iphone12" src={Iphone12} alt="Iphone 12" />
        </div>
          
        <div className="features-card-container">
          <div className="features-card">
            <div className="features-card-logos">
              <img src={Payments} alt="Icon of a Bank card" />
            </div>
            <div className="features-text">
              <h3>Easy Payments</h3>
              <p className="cards-text">
                Id mollis consectetur congue egestas egestas suspendisse blandit
                justo.
              </p>
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-logos">
              <img src={Security} alt="Icon of a protective shield" />
            </div>
            <div className="features-text">
              <h3>Data Security</h3>
              <p className="cards-text">
                Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum
                non.
              </p>
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-logos">
              <img src={Statistics} alt="Icon of a graph with a dollar sign" />
            </div>
            <div className="features-text">
              <h3>Cost Statistics</h3>
              <p className="cards-text">
                Mattis urna ultricies non amet, purus in auctor non. Odio
                vulputate ac nibh.
              </p>
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-logos">
              <img src={Support} alt="Icon of two chat bubbles" />
            </div>
            <div className="features-text">
              <h3>Support 24/7</h3>
              <p className="cards-text">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean quam
                mauris.
              </p>
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-logos">
              <img src={Cashback} alt="Icon of a wallet" />
            </div>
            <div className="features-text">
              <h3>Regular Cashback</h3>
              <p className="cards-text">
                Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                imperdiet eleifend.
              </p>
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-logos">
              <img src={Happy} alt="A happy smiley icon" />
            </div>
            <div className="features-text">
              <h3>Top Standards</h3>
              <p className="cards-text">
                Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id.
                Sit facilisis dolor arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Features