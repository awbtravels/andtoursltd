// src/pages/ConsultationPage.jsx
import React from "react";

export default function ConsultationPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-red-primary mb-4">Visa Consultation Booking</h1>
      <p className="text-base text-gray-700 mb-4">
        Book a professional visa consultation with AWB Travels and Tours Ltd for just ₦50,000 ($33).
      </p>
      <a
        href="https://paystack.com/pay/awbconsultation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-primary text-white px-6 py-3 rounded hover:bg-red-700"
      >
        Book Now via Paystack
      </a>
    </section>
  );
}
