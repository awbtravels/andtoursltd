// src/pages/ConsultationPage.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const handler = window.PaystackPop.setup({
      key: 'pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba',
      email: formData.email,
      amount: 50000 * 100,
      currency: 'NGN',
      callback: () => {
        emailjs.send(
          'service_oave8fr',
          '_ejs-test-mail-service_',
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime,
          },
          'GamSTUvtdCEHyRlM2'
        );

        navigate('/consultation-success');
      },
    });

    handler.openIframe();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'darkred' }}>
        AWB Travels and Tours Ltd RC:7177769<br />
        <small style={{ fontStyle: 'italic' }}>....fulfilling your dream life</small>
      </h2>

      <h3 style={{ marginTop: '1.5rem', color: '#444' }}>
        Visa Consultation Booking (₦50,000)
      </h3>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <label>First Name*:</label>
        <input type="text" name="firstName" required onChange={handleChange} />

        <label>Last Name*:</label>
        <input type="text" name="lastName" required onChange={handleChange} />

        <label>Email*:</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Phone Number*:</label>
        <input type="tel" name="phone" required onChange={handleChange} />

        <label>Country of Interest*:</label>
        <input type="text" name="country" required onChange={handleChange} />

        <label>Preferred Date*:</label>
        <input
          type="date"
          name="preferredDate"
          required
          min={new Date().toISOString().split('T')[0]}
          onChange={handleChange}
        />

        <label>Preferred Time*:</label>
        <select name="preferredTime" required onChange={handleChange}>
          <option value="">Select Time</option>
          <option>11:00 AM</option>
          <option>11:30 AM</option>
          <option>12:00 PM</option>
          <option>12:30 PM</option>
          <option>1:00 PM</option>
          <option>1:30 PM</option>
          <option>2:00 PM</option>
          <option>2:30 PM</option>
          <option>3:00 PM</option>
          <option>3:30 PM</option>
          <option>4:00 PM</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: '1rem',
            backgroundColor: 'crimson',
            color: '#fff',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Book Now & Pay via Paystack
        </button>
      </form>
    </div>
  );
};

export default ConsultationPage;
