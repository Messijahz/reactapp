import React from 'react'
import ShowcaseScreen1 from '../assets/pictures/showcase-screens1tablet.svg'
import Mobile from '../assets/pictures/mobile.svg'
import ShowcaseScreen3 from '../assets/pictures/showcase-screens3tab.svg'

const Information = () => {
  return (
    
    <section id="information">
        <div className="container">
            <h2>How Does It Work?</h2>
                <div className="information-mobiles-container">
                    <img className="tablet-image" src={ShowcaseScreen1} alt="mobile phone" />
                    <img className="centermobile" src={Mobile} alt="mobile phone" />
                    <img className="tablet-image" src={ShowcaseScreen3} alt="mobile phone" />
                </div>
                <div className="information-text-container">
                    <h3 className="information-h3-mobile">Transfers to people from your contact list</h3>
                    <h3 className="information-h3-tablet">Step 3. Transfers to people from your contact list</h3>
                    <h3 className="information-h3-desktop">Latest transaction history</h3>
                    <p className="information-mobile-tablet">
                        Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                        Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
                    </p>
                    <p className="information-tablet-desktop">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
                </div>
        </div>
    </section>

  )
}

export default Information