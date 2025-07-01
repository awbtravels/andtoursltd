// src/pages/ToursPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Real Viator categoryId values
const tourCategories = [
  { name: "City Tours", icon: "🏙️", category: "20326" },
  { name: "Adventure Tours", icon: "🌄", category: "20511" },
  { name: "Cultural & Historical", icon: "🏛️", category: "20602" },
  { name: "Day Trips & Excursions", icon: "🚌", category: "22280" },
  { name: "Boat & Cruise Tours", icon: "🚢", category: "21749" },
  { name: "Wildlife & Safari", icon: "🦁", category: "22278" },
  { name: "Sightseeing Packages", icon: "🗺️", category: "22283" },
  { name: "Religious Pilgrimages", icon: "🙏", category: "22652" },
  { name: "Private & Group Tours", icon: "👥", category: "20591" },
];

export default function ToursPage() {
  const navigate = useNavigate(); // ✅ Enables navigation

  // ✅ Handle click by navigating to category route
  const handleCategoryClick = (category) => {
    navigate(`/tours/category/${category}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* ✅ Page Header */}
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        Explore Our Tour Packages
      </h1>

      {/* ✅ Introduction Text */}
      <p className="text-gray-700 mb-6">
        Discover unforgettable adventures, cultural experiences, sightseeing,
        and more. Whether you're looking for a group tour, city excursion, or a
        custom trip, <strong>AWB Travels</strong> has the right package for you.
      </p>

      {/* ✅ Category List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-800">
        {tourCategories.map((cat) => (
          <li
            key={cat.category}
            onClick={() => handleCategoryClick(cat.category)}
            className="border p-4 rounded shadow hover:shadow-md transition cursor-pointer hover:bg-gray-50"
          >
            {/* ✅ Emoji Icon and Name */}
            <span className="mr-2 text-xl">{cat.icon}</span>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
