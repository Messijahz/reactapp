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
      newErrors.fullName = '* Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = '* Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '* Email is invalid';
    }

    if (!formData.specialist) {
      newErrors.specialist = '* Please select a specialist';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
        <p style={{ color: 'green', fontSize: '14px' }}>
          Thank you! We will contact you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        {errors.fullName && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.fullName}</p>}

        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }}>{errors.email}</p>}

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
        {errors.specialist && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '5px' }}>{errors.specialist}</p>}

        <button type="submit" className="btn-primary">
          Make an appointment
        </button>
      </form>
    </div>
  );
};

export default ContactViewForm;