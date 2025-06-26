// ✅ src/pages/ConsultationPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConsultationPage = () => {
  const navigate = useNavigate();

  // 🔹 Initialize form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    preferredDate: "",
    preferredTime: "",
  });

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Start Paystack payment
  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
      email: formData.email,
      amount: 50000 * 100, // in kobo
      currency: "NGN",
      callback: () => {
        sendEmail(); // 🔸 Trigger confirmation email
        navigate("/consultation-success"); // 🔸 Redirect after payment
      },
      onClose: () => {
        alert("Payment window closed.");
      },
    });

    handler.openIframe();
  };

  // 🔹 Send email using EmailJS
  const sendEmail = () => {
    window.emailjs
      .send(
        "service_oave8fr",
        "_ejs-test-mail-service_",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
        },
        "GamSTUvtdCEHyRlM2" // Public Key
      )
      .then(
        () => console.log("✅ Email sent."),
        (error) => console.error("❌ Email failed:", error)
      );
  };

  // 🔹 Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    payWithPaystack();
  };

  // 🔹 Restrict date input to today and future
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="p-6 max-w-2xl mx-auto">
      {/* 🔸 Company Header */}
      <h1 className="text-2xl font-bold text-red-primary mb-2">
        AWB Travels and Tours Ltd RC:7177769
      </h1>
      <p className="italic mb-4">....fulfilling your dream life</p>

      {/* 🔸 Booking Form Title */}
      <h2 className="text-xl font-semibold text-red-600 mb-6">
        Visa Consultation Booking (₦50,000)
      </h2>

      {/* 🔸 Form Begins */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 🔹 First Name */}
        <div>
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Last Name */}
        <div>
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Email */}
        <div>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Phone Number */}
        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Country of Interest */}
        <div>
          <label>Country of Interest *</label>
          <input
            type="text"
            name="country"
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Preferred Date */}
        <div>
          <label>Preferred Date *</label>
          <input
            type="date"
            name="preferredDate"
            required
            min={today}
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* 🔹 Preferred Time */}
        <div>
          <label>Preferred Time *</label>
          <select
            name="preferredTime"
            required
            className="input"
            onChange={handleChange}
          >
            <option value="">Select Time</option>
            {[
              "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
              "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
              "3:00 PM", "3:30 PM", "4:00 PM"
            ].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 Submit Button */}
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
