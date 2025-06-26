// src/pages/ConsultationPage.jsx
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ConsultationPage = () => {
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
  const today = new Date();
  const isToday = formData.date === today.toISOString().split("T")[0];

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM"
  ];

  useEffect(() => {
    if (!formData.date) return;

    const selectedDate = new Date(formData.date);
    const isWeekend = [0, 6].includes(selectedDate.getDay());

    if (isWeekend) {
      setAvailableTimes([]);
      return;
    }

    if (isToday) {
      const now = new Date();
      const futureSlots = timeSlots.filter((slot) => {
        const [hour, minute] = slot.split(/[: ]/);
        const hour24 = slot.includes("PM") && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour);
        const slotTime = new Date(formData.date);
        slotTime.setHours(hour24, parseInt(minute), 0, 0);
        return slotTime > now;
      });
      setAvailableTimes(futureSlots);
    } else {
      setAvailableTimes(timeSlots);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only allow submit if time and date are selected and not weekend
    const selectedDate = new Date(formData.date);
    if (!formData.date || !formData.time || [0, 6].includes(selectedDate.getDay())) {
      alert("Please choose a valid weekday and time slot.");
      return;
    }

    // Send emails
    emailjs.send("service_oave8fr", "_ejs-test-mail-service_", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      date: formData.date,
      time: formData.time,
      to_email: formData.email,
      to_admin: "awbtravelsntours@outlook.com",
    }, "GamSTUvtdCEHyRlM2");

    // Launch Paystack payment
    const paystack = window.PaystackPop && window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
      email: formData.email,
      amount: 50000 * 100,
      currency: "NGN",
      firstname: formData.firstName,
      lastname: formData.lastName,
      callback: function () {
        window.location.href = "/consultation-success";
      },
      onClose: function () {
        alert("Payment window closed. Please try again.");
      },
    });

    if (paystack) paystack.openIframe();
    else alert("Paystack not loaded. Please refresh the page.");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "red" }}>AWB Travels and Tours Ltd RC:7177769</h2>
      <h3 style={{ color: "black" }}>....fulfilling your dream life</h3>
      <h3 style={{ color: "red" }}>Visa Consultation Booking (₦50,000)</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name*" required onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name*" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email*" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number*" required onChange={handleChange} />
        <input type="text" name="country" placeholder="Country of Interest*" required onChange={handleChange} />

        <label>Select your appointment date:</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          min={today.toISOString().split("T")[0]}
        />

        <label>Select your appointment time:</label>
        <select name="time" required onChange={handleChange} value={formData.time}>
          <option value="">-- Select Time --</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))
          ) : (
            <option disabled>No available time slots</option>
          )}
        </select>

        <button type="submit" style={{ background: "red", color: "white", padding: "1rem", marginTop: "1rem" }}>
          Book Now & Pay via Paystack
        </button>
      </form>
    </div>
  );
};

export default ConsultationPage;
