// src/pages/ConsultationPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🧠 Utility to format time
const formatTime = (hour, minute = 0) => {
  const time = new Date();
  time.setHours(hour);
  time.setMinutes(minute);
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const ConsultationPage = () => {
  const navigate = useNavigate();

  // ✅ Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  // ✅ Generate future time slots (11:00 AM – 4:00 PM)
  const generateAvailableTimes = (selectedDate) => {
    const slots = [];
    const now = new Date();
    const today = now.toDateString();
    const chosen = new Date(selectedDate);
    const chosenDate = chosen.toDateString();

    for (let hour = 11; hour <= 16; hour++) {
      for (let min = 0; min < 60; min += 30) {
        const slot = new Date(selectedDate);
        slot.setHours(hour, min, 0, 0);

        const isFutureTime = chosenDate !== today || slot > now;
        if (isFutureTime) {
          slots.push(formatTime(hour, min));
        }
      }
    }
    setAvailableTimes(slots);
  };

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "preferredDate") {
      generateAvailableTimes(value);
    }
  };

  // ✅ Disable past dates and weekends
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const isWeekend = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay();
    return day === 6 || day === 0; // Saturday/Sunday
  };

  // ✅ Submit to Paystack
  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
      email: formData.email,
      amount: 50000 * 100,
      currency: "NGN",
      callback: () => {
        sendEmail();
        navigate("/consultation-success");
      },
      onClose: () => alert("Payment window closed."),
    });
    handler.openIframe();
  };

  // ✅ EmailJS: Send appointment confirmation
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
        }
      )
      .then(() => console.log("✅ Email sent"), (err) => console.error("❌ Email failed", err));
  };

  // ✅ Submit Form Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.preferredDate || !formData.preferredTime) {
      alert("Please select valid date and time");
      return;
    }
    if (isWeekend(formData.preferredDate)) {
      alert("Weekends are not available for booking.");
      return;
    }
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
        {/* 🔻 Basic Fields */}
        <div><label>First Name *</label><input type="text" name="firstName" required className="input" onChange={handleChange} /></div>
        <div><label>Last Name *</label><input type="text" name="lastName" required className="input" onChange={handleChange} /></div>
        <div><label>Email *</label><input type="email" name="email" required className="input" onChange={handleChange} /></div>
        <div><label>Phone Number *</label><input type="tel" name="phone" required className="input" onChange={handleChange} /></div>
        <div><label>Country of Interest *</label><input type="text" name="country" required className="input" onChange={handleChange} /></div>

        {/* 📅 Date Picker */}
        <div>
          <label>Preferred Date *</label>
          <input
            type="date"
            name="preferredDate"
            min={getMinDate()}
            required
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* ⏰ Time Slots */}
        <div>
          <label>Preferred Time *</label>
          <select
            name="preferredTime"
            required
            className="input"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="">Select your appointment time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* ✅ Submit */}
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
