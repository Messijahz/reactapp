import React, { useState } from 'react';
import axios from 'axios'


const ContactViewForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'Web Development', });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://win24-assignment.azurewebsites.net/api/forms/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (res.status === 200) {
        console.log('Allt lyckades');
        alert('Allt lyckades');
      }
    } catch (error) {
      console.log('Någonting gick fel', error);
      alert('Någonting gick fel');
    }
  };
    





  return (
    <div className="consulation-box">
          <h2>Get Online Consultation</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name:</label>
            <input type="text" name="fullName" placeholder="Your full name" value={formData.name} onChange={handleInputChange} noValidate />

            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" placeholder="Your E-mail" value={formData.email} onChange={handleInputChange} noValidate />

            <label htmlFor="specialist">Specialist:</label>
            <select id="speciality" name="specialist" value={formData.specialist} onChange= {handleInputChange} noValidate>
              <option disabled></option>
              <option>Web Development</option>
              <option>Graphic Design</option>
              <option>Data Science</option>
              <option>Marketing</option>
            </select>

            <button type="submit" className="btn-primary">Make an appointment</button>
          </form>
        </div>
  )
}


export default ContactViewForm