// src/pages/Insurance.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Insurance() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    passportNumber: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    destinationCountry: "",
    startDate: "",
    endDate: "",
    email: "",
    phone: "",
    insuranceType: "Travel Insurance",
  });

  // 🏷 Get price dynamically based on insurance type
  const getPrice = () => {
    switch (formData.insuranceType) {
      case "Car Insurance":
        return 20000;
      case "Student Insurance":
        return 50000;
      case "Travel Insurance":
        return 30000;
      case "Business Insurance":
        return 50000;
      case "Medical Insurance":
        return 100000;
      default:
        return 50000;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const price = getPrice();

    // 🏷 Email to client
    emailjs.send(
      "service_uf2f20j",
      "template_sj40zal",
      {
        ...formData,
        to_email: formData.email,
      },
      "NA4gg71pG4pUPkyr3"
    );

    // 🏷 Email to admin
    emailjs.send(
      "service_uf2f20j",
      "template_sj40zal",
      {
        ...formData,
        to_email: "awbtravelsntours@outlook.com",
      },
      "NA4gg71pG4pUPkyr3"
    );

    // 🏷 Paystack Payment
    const handler = window.PaystackPop.setup({
      key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
      email: formData.email,
      amount: price * 100, // kobo
      currency: "NGN",
      ref: new Date().getTime().toString(),
      callback: function (response) {
        alert("✅ Payment successful! Confirmation sent to your email.");
        window.location.reload();
      },
      onClose: function () {
        alert("❌ Transaction cancelled.");
      },
    });

    handler.openIframe();
  };

  const price = getPrice();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Insurance Quote & Booking
      </h1>
      <p className="mb-6 text-gray-600">
        Get covered for your journey: travel, student, medical, business, tourist, or car insurance.
      </p>

      <form onSubmit={handlePayment} className="space-y-4 text-sm">
        {/* 🏷 Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="firstName" required placeholder="First Name *" onChange={handleChange} className="border p-2" />
          <input type="text" name="middleName" required placeholder="Middle Name *" onChange={handleChange} className="border p-2" />
          <input type="text" name="lastName" required placeholder="Last Name *" onChange={handleChange} className="border p-2" />
        </div>

        {/* 🏷 Identity Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="date" name="dob" required placeholder="Date of Birth" onChange={handleChange} className="border p-2" />
          <input type="text" name="passportNumber" required placeholder="Passport Number *" onChange={handleChange} className="border p-2" />
          <input type="text" name="nationality" required placeholder="Nationality *" onChange={handleChange} className="border p-2" />
        </div>

        {/* 🏷 Address */}
        <textarea name="address" required placeholder="Address *" onChange={handleChange} className="border p-2 w-full"></textarea>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="city" required placeholder="City *" onChange={handleChange} className="border p-2" />
          <input type="text" name="state" required placeholder="State *" onChange={handleChange} className="border p-2" />
          <input type="text" name="zipcode" required placeholder="Zipcode *" onChange={handleChange} className="border p-2" />
        </div>

        {/* 🏷 Destination & Insurance Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="destinationCountry" required placeholder="Destination Country *" onChange={handleChange} className="border p-2" />
          <select name="insuranceType" onChange={handleChange} className="border p-2">
            <option>Travel Insurance</option>
            <option>Student Insurance</option>
            <option>Medical Insurance</option>
            <option>Business Insurance</option>
            <option>Tourist Insurance</option>
            <option>Car Insurance</option>
          </select>
        </div>

        {/* 🏷 Travel Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" name="startDate" required placeholder="Start Date *" onChange={handleChange} className="border p-2" min="2025-06-30" />
          <input type="date" name="endDate" required placeholder="End Date *" onChange={handleChange} className="border p-2" min="2025-06-30" />
        </div>

        {/* 🏷 Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="email" name="email" required placeholder="Email Address *" onChange={handleChange} className="border p-2" />
          <input type="text" name="phone" required placeholder="Phone Number *" onChange={handleChange} className="border p-2" />
        </div>

        {/* 🏷 Payment Button */}
        <button type="submit" className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">
          Pay ₦{price.toLocaleString()} & Confirm Insurance
        </button>
      </form>
    </div>
  );
}
