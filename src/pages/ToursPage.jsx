// src/pages/ToursPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Replace with real Viator category IDs
const tourCategories = [
  { name: "City Tours", icon: "🏙️", category: 10103 },
  { name: "Adventure Tours", icon: "🌄", category: 10116 },
  { name: "Cultural & Historical", icon: "🏛️", category: 10100 },
  { name: "Day Trips & Excursions", icon: "🚌", category: 10104 },
  { name: "Boat & Cruise Tours", icon: "🚢", category: 10102 },
  { name: "Wildlife & Safari", icon: "🦁", category: 10117 },
  { name: "Sightseeing Packages", icon: "🗺️", category: 10101 },
  { name: "Religious Pilgrimages", icon: "🙏", category: 20295 },
  { name: "Private & Group Tours", icon: "👥", category: 10122 },
];

export default function ToursPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/tours/category/${categoryId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Explore Our Tour Packages</h1>
      <p className="text-gray-700 mb-6">
        Discover unforgettable adventures, cultural experiences, sightseeing, and more.
        Whether you're looking for a group tour, city excursion, or a custom trip,
        <strong> AWB Travels </strong> has the right package for you.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-800">
        {tourCategories.map((cat) => (
          <li
            key={cat.category}
            onClick={() => handleCategoryClick(cat.category)}
            className="border p-4 rounded shadow hover:shadow-md transition cursor-pointer hover:bg-gray-50"
          >
            <span className="mr-2 text-xl">{cat.icon}</span>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
