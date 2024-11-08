import React, { useState } from 'react';
import axios from 'axios';


const ContactViewForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: '',
  });


  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    setErrors({ ...errors, [name]: '' });
    setSubmitted(false);
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = '* Full name is required.';
    } else if (!/^[a-öA-Ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = '* Full name must be at least 2 characters and contain only letters and spaces.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '* Email is required';
    } else if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = '* Email is invalid.';
    }

    if (!formData.specialist) {
      newErrors.specialist = '* Please select a specialist.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //Här skapar vi en array med "keys" och om antalet keys (eller fel, alltså newErrors) är 0 så är värdet true och den går igenom utan fel. Om värdet är mer än 0 så har vi valideringsfel i koden.
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post(
        'https://win24-assignment.azurewebsites.net/api/forms/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 200) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          specialist: '',
        });
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

      {submitted && (
        <p className="confirmation-contact">
        Thank you! We will contact you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          autoComplete="name"
        />
          <div className="message-space">
            {errors.fullName && <p className="error-contact">{errors.fullName}</p>}
          </div>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
          autoComplete="email"
        />
          <div className="message-space">
            {errors.email && <p className="error-contact">{errors.email}</p>}
          </div>
        <div className='labelcontainer'>
          <label htmlFor="specialist">Specialist:</label>
          <select
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a specialist
            </option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Data Science</option>
            <option>Marketing</option>
          </select>
            <div className="message-space">
            {errors.specialist && <p className="error-contact">{errors.specialist}</p>}
            </div>
        </div>
        

        <button type="submit" className="btn-primary">
          Make an appointment
        </button>
      </form>
    </div>
  );
};

export default ContactViewForm;