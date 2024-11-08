import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientIcon from '../assets/pictures/clienticon.svg';
import FullStar from '../assets/pictures/fullstar.svg';
import EmptyStar from '../assets/pictures/emptystar.svg';

const Stories = () => {
  const [testimonials, setTestimonials] = useState([]); 

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials'); //Hämtar API frn den här länken.
        setTestimonials(response.data); //Sätter mina testimonials till den hämtade datan från API.
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Fick hjälp av AI med den här kodbiten för att importera stjärnor.
  const renderStars = (starRating) => {
    const fullStars = Array(starRating).fill(<img src={FullStar} alt="Full star" />);
    const emptyStars = Array(5 - starRating).fill(<img src={EmptyStar} alt="Empty star" />);
    return [...fullStars, ...emptyStars];
  };

  return (
    <section id="stories">
      <div className="stories-container container">
        <div className="clients-headline">
          <h1 className="client-headline-box">Clients are Loving Our App</h1>
        </div>

        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="quote-box">
              <img src={ClientIcon} alt="An icon of a quote" />
            </div>

            <div className="stars">{renderStars(testimonial.starRating)}</div>
            
            <p>{testimonial.comment}</p>
            
            <div className="client-info">
              <img src={testimonial.avatarUrl} alt={`Avatar of ${testimonial.author}`} />
              <div className="client-info-text">
                <p className="client-name">{testimonial.author}</p>
                <p className="client-role">{testimonial.jobRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;