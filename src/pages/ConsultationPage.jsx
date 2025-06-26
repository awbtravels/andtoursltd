// src/pages/ConsultationPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConsultationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba", // ✅ Your Paystack Public Key
      email: formData.email,
      amount: 50000 * 100, // amount in kobo
      currency: "NGN",
      callback: function () {
        sendEmail(); // ✅ Send email after payment success
        navigate("/consultation-success"); // ✅ Redirect
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  const sendEmail = () => {
    window.emailjs
      .send(
        "service_oave8fr", // ✅ Your Service ID
        "_ejs-test-mail-service_", // ✅ Your Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          preferredTime: formData.preferredTime,
        }
      )
      .then(
        () => console.log("✅ Confirmation email sent."),
        (error) => console.error("❌ Failed to send email:", error)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    payWithPaystack();
  };

  return (
    <section className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-red-primary mb-2">
        AWB Travels and Tours Ltd RC:7177769
      </h1>
      <p className="italic mb-4">....fulfilling your dream life</p>
      <h2 className="text-xl font-semibold text-red-600 mb-6">
        Visa Consultation Booking (₦50,000)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" required className="input" onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" required className="input" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required className="input" onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phone" required className="input" onChange={handleChange} />
        </div>
        <div>
          <label>Country of Interest</label>
          <input type="text" name="country" required className="input" onChange={handleChange} />
        </div>
        <div>
          <label>Preferred Date & Time</label>
          <select name="preferredTime" required className="input" onChange={handleChange}>
            <option value="">Select Time</option>
            {[
              "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
              "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
              "3:00 PM", "3:30 PM", "4:00 PM",
            ].map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-red-primary text-white py-3 px-6 rounded hover:bg-red-700"
        >
          Book Now & Pay via Paystack
        </button>
      </form>
    </section>
  );
};

export default ConsultationPage;
