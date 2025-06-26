// src/pages/ConsultationPage.jsx

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

// ✅ Booking Form Component
const ConsultationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    date: "",
    time: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const today = new Date();
  const currentTime = today.getHours() * 60 + today.getMinutes();

  // ✅ Booking slots setup
  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM",
  ];

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Disable weekends and past times
  const isValidDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    return day !== 0 && day !== 6 && date >= today.setHours(0, 0, 0, 0);
  };

  // ✅ Update time slots based on selected date
  useEffect(() => {
    if (formData.date && isValidDate(formData.date)) {
      const selectedDate = new Date(formData.date);
      const isToday =
        selectedDate.toDateString() === new Date().toDateString();

      const filtered = timeSlots.filter((slot) => {
        if (!isToday) return true;

        const [hour, minute] = slot.split(/:| /);
        const slotHour = parseInt(hour) + (slot.includes("PM") && hour !== "12" ? 12 : 0);
        const slotMinute = parseInt(minute);
        const slotTime = slotHour * 60 + slotMinute;
        return slotTime > currentTime;
      });

      setAvailableTimes(filtered);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);

  // ✅ Handle form submission and payment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidDate(formData.date)) {
      alert("Please select a valid weekday date (Mon–Fri)");
      return;
    }

    const paystackHandler = window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
      email: formData.email,
      amount: 50000 * 100,
      currency: "NGN",
      callback: function () {
        // ✅ Send confirmation email
        emailjs
          .send("service_oave8fr", "_ejs-test-mail-service_", {
            to_name: formData.firstName,
            from_name: "AWB Travels and Tours Ltd",
            message: `Your visa consultation is booked for ${formData.date} at ${formData.time}.`,
            user_email: formData.email,
            admin_email: "awbtravelsntours@outlook.com",
            phone: formData.phoneNumber,
            country: formData.country,
          }, "GamSTUvtdCEHyRlM2")
          .then(() => {
            navigate("/consultation-success");
          })
          .catch((err) => {
            console.error("EmailJS Error:", err);
            alert("Failed to send confirmation email.");
          });
      },
      onClose: function () {
        alert("Payment window closed.");
      },
    });

    paystackHandler.openIframe();
  };

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "auto" }}>
      {/* ✅ Header Info */}
      <h2 style={{ color: "darkred", marginBottom: "0" }}>
        AWB Travels and Tours Ltd RC:7177769
      </h2>
      <p>....fulfilling your dream life</p>
      <h3>Visa Consultation Booking (₦50,000)</h3>

      {/* ✅ Booking Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name *" required onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name *" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email *" required onChange={handleChange} />
        <input type="tel" name="phoneNumber" placeholder="Phone Number *" required onChange={handleChange} />
        <input type="text" name="country" placeholder="Country of Interest *" required onChange={handleChange} />

        {/* ✅ Date Picker */}
        <label>Select your appointment date:</label>
        <input
          type="date"
          name="date"
          required
          min={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
        />

        {/* ✅ Time Dropdown */}
        <label>Select your appointment time:</label>
        <select name="time" required value={formData.time} onChange={handleChange}>
          <option value="">-- Select Time --</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        {/* ✅ Submit Button */}
        <button type="submit" style={{ marginTop: "20px", backgroundColor: "red", color: "#fff", padding: "10px 20px", border: "none" }}>
          Book Now & Pay via Paystack
        </button>
      </form>
    </div>
  );
};

export default ConsultationPage;
