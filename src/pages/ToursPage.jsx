// src/pages/ToursPage.jsx
import React from "react";

export default function ToursPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Explore Our Tour Packages</h1>
      <p className="text-gray-700 mb-6">
        Discover unforgettable adventures, cultural experiences, sightseeing, and more. Whether you're looking for a group tour, city excursion, or a custom trip, AWB Travels has the right package for you.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-800">
        <li className="border p-4 rounded shadow hover:shadow-md transition">🏙️ City Tours</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🌄 Adventure Tours</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🏛️ Cultural & Historical</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🚌 Day Trips & Excursions</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🚢 Boat & Cruise Tours</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🦁 Wildlife & Safari</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🗺️ Sightseeing Packages</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">🙏 Religious Pilgrimages</li>
        <li className="border p-4 rounded shadow hover:shadow-md transition">👥 Private & Group Tours</li>
      </ul>
    </div>
  );
}
