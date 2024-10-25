import React from 'react'
import Brand1 from '../assets/pictures/01-brands.svg'
import Brand2 from '../assets/pictures/02-brands.svg'
import Brand3 from '../assets/pictures/03-brands.svg'
import Brand4 from '../assets/pictures/04-brands.svg'
import Brand5 from '../assets/pictures/05-brands.svg'
import Brand6 from '../assets/pictures/06-brands.svg'

const Brands = () => {
  return (
    
    <section>
      <div id="logotypes" className="logotypes-container container">
        <div className="logotype-box">
          <img src={Brand1} alt="A version of logoipsum logotyp" />
        </div>
        <div className="logotype-box">
          <img src={Brand2} alt="Another version of the logoipsum logotyp" />
        </div>
        <div className="logotype-box">
          <img src={Brand3} alt="A third version of the logoipsum logotyp" />
        </div>
        <div className="logotype-box">
          <img src={Brand4} alt="A fourth version of the logoipsum logotyp" />
        </div>
        <div className="logotype-box logotype-box-desk">
          <img src={Brand5} alt="A fifth version of the logoipsum logotyp" />
        </div>
        <div className="logotype-box logotype-box-desk">
          <img src={Brand6} alt="A sixth version of the logoipsum logotyp" />
        </div>
      </div>
    </section>

  )
}

export default Brands