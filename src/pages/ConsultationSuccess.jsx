import React from 'react';
import { Link } from 'react-router-dom';

const ConsultationSuccess = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 px-4 py-16 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful</h2>
        <p className="text-lg mb-6">
          Thank you for booking a visa consultation with AWB Travels and Tours Ltd. A confirmation email has been sent to your inbox.
        </p>
        <p className="text-md mb-8">We look forward to assisting you with your travel goals.</p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ConsultationSuccess;
