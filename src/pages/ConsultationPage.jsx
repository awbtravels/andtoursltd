// src/pages/ConsultationPage.jsx

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ConsultationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    time: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState("");

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM"
  ];

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const now = new Date();
    const isToday = selectedDate.toDateString() === now.toDateString();

    let filteredSlots = [...timeSlots];

    if (isToday) {
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();

      filteredSlots = filteredSlots.filter((slot) => {
        const [hour, modifier] = slot.split(" ");
        let [h, m] = hour.split(":").map(Number);
        if (modifier === "PM" && h !== 12) h += 12;
        const slotTime = h * 60 + m;
        const currentTime = currentHour * 60 + currentMinutes;
        return slotTime > currentTime;
      });
    }

    setAvailableTimes(filteredSlots);
    setFormData({ ...formData, date: e.target.value, time: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      setError("Please select a valid date and time.");
      return;
    }

    // Paystack redirect
    localStorage.setItem("consultationData", JSON.stringify(formData));
    navigate("/consultation-success");

    // Send email
    emailjs.send("service_oave8fr", "_ejs-test-mail-service", {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "AWB Travels and Tours",
      message: `
        New Visa Consultation Booking:

        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Country of Interest: ${formData.country}
        Appointment Date: ${formData.date}
        Appointment Time: ${formData.time}
      `,
      reply_to: formData.email,
    }, "GamSTUvtdCEHyRlM2").then(
      () => console.log("Email sent successfully"),
      (err) => console.error("Email send error:", err)
    );
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const isWeekend = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay();
    return day === 6 || day === 0;
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "red", fontWeight: "bold" }}>AWB Travels and Tours Ltd RC:7177769</h2>
      <h3 style={{ color: "black" }}>....fulfilling your dream life</h3>
      <h3 style={{ color: "red" }}>Visa Consultation Booking (₦50,000)</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country of Interest"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />

        <input
          type="date"
          required
          min={getMinDate()}
          value={formData.date}
          onChange={handleDateChange}
          onBlur={() => {
            if (isWeekend(formData.date)) {
              setError("Appointments cannot be booked on Saturdays or Sundays.");
              setFormData({ ...formData, date: "", time: "" });
              setAvailableTimes([]);
            } else {
              setError("");
            }
          }}
        />

        {availableTimes.length > 0 && (
          <select
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            <option value="">Select Time</option>
            {availableTimes.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}>
          Book Now & Pay via Paystack
        </button>
      </form>
    </div>
  );
};

export default ConsultationPage;
