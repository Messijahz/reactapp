import React from 'react'
import ClientIcon from '../assets/pictures/clienticon.svg'
import FullStar from '../assets/pictures/fullstar.svg'
import EmptyStar from '../assets/pictures/emptystar.svg'
import ClientFannie from '../assets/pictures/clientfannie.svg'
import ClientAlbert from '../assets/pictures/clientalbert.svg'



const Stories = () => {
  return (
    
    <section id="stories">
        <div className="stories-container container">
            <div className="clients-headline">
                <h1 className="client-headline-box">Clients are Loving Our App</h1>
            </div>
            <div className="testamonial">
                <div className="quote-box">
                    <img src={ClientIcon} alt="An icon of a quote" />
                </div>
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={EmptyStar} alt="An icon of a empty star" />
                <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <div className="client-info">
                    <img src={ClientFannie} alt="An animated picture of a designer called Fannie" />
                    <div className="client-info-text">
                        <p className="client-name">Fannie Summers</p>
                        <p className="client-role">Designer</p>
                    </div>
                </div>
            </div>
            <div className="testamonial">
                <div className="quote-box">
                    <img src={ClientIcon} alt="An icon of a quote" />
                </div>
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <img src={FullStar} alt="An icon of a full star" />
                <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                <div className="client-info">
                    <img src={ClientAlbert} alt="A picture of a developer called Albert" />
                    <div className="client-info-text">
                        <p className="client-name">Albert Flores</p>
                        <p className="client-role">Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Stories