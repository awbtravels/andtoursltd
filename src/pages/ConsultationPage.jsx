// src/pages/ConsultationPage.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ConsultationPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    time: "",
  });

  const [error, setError] = useState("");

  const isWeekend = (dateStr) => {
    const date = new Date(dateStr);
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const isPastDate = (dateStr) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const inputDate = new Date(dateStr).setHours(0, 0, 0, 0);
    return inputDate < today;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, country, date, time } = form;

    if (!firstName || !lastName || !email || !phone || !country || !date || !time) {
      setError("Please fill all fields.");
      return;
    }

    if (isWeekend(date)) {
      setError("Saturday and Sunday bookings are not allowed.");
      return;
    }

    if (isPastDate(date)) {
      setError("Selected date is in the past.");
      return;
    }

    emailjs.send("service_oave8fr", "_ejs-test-mail-service_", {
      to_name: firstName,
      from_name: "AWB Travels and Tours",
      to_email: email,
      message: `Hello ${firstName},\n\nYour visa consultation for ${country} has been booked for ${date} at ${time}.`,
    }, "GamSTUvtdCEHyRlM2");

    emailjs.send("service_oave8fr", "_ejs-test-mail-service_", {
      to_name: "AWB Admin",
      from_name: "AWB Website",
      to_email: "awbtravelsntours@outlook.com",
      message: `New consultation:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nDate: ${date}\nTime: ${time}`,
    }, "GamSTUvtdCEHyRlM2");

    const paystackLink = `https://paystack.com/pay/awbconsultation`;
    window.location.href = paystackLink;

    navigate("/consultation-success");
  };

  const getAvailableTimes = () => {
    const times = [];
    for (let hour = 11; hour <= 16; hour++) {
      times.push(`${hour}:00 PM`);
      times.push(`${hour}:30 PM`);
    }
    return times;
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-red-600">AWB Travels and Tours Ltd RC:7177769</h2>
      <p className="text-black">....fulfilling your dream life</p>
      <h3 className="text-red-600 text-lg font-semibold mt-2">Visa Consultation Booking (₦50,000)</h3>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border" onChange={handleChange} />
        <input type="text" name="country" placeholder="Country of Interest" className="w-full p-2 border" onChange={handleChange} />

        <input
          type="date"
          name="date"
          className="w-full p-2 border"
          min={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
        />

        <select name="time" className="w-full p-2 border" onChange={handleChange}>
          <option value="">Select Time</option>
          {getAvailableTimes().map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="bg-red-600 text-white px-4 py-2 mt-2 rounded">Book Now & Pay via Paystack</button>
      </form>
    </div>
  );
};

export default ConsultationPage;
