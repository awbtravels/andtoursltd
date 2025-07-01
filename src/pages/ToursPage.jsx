// src/pages/ToursPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const tourCategories = [
  { name: "City Tours", icon: "🏙️", categoryId: "d23" },
  { name: "Adventure Tours", icon: "🌄", categoryId: "d26" },
  { name: "Cultural Tours", icon: "🏛️", categoryId: "d32" },
  { name: "Sightseeing Passes", icon: "🗺️", categoryId: "d30" },
  { name: "Historical Tours", icon: "📜", categoryId: "d34" },
  { name: "Food & Drink", icon: "🍽️", categoryId: "d17" },
  { name: "Nature & Wildlife", icon: "🦁", categoryId: "d18" },
  { name: "Luxury & Special Occasions", icon: "💎", categoryId: "d25" },
];

export default function ToursPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/tours/category/${categoryId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Explore Our Tours</h1>
      <p className="text-gray-200 mb-8">
        Select a tour category below to explore available tours powered by Viator.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tourCategories.map((cat) => (
          <div
            key={cat.categoryId}
            onClick={() => handleCategoryClick(cat.categoryId)}
            className="border-2 border-red-500 p-4 rounded-lg text-white text-center font-semibold hover:bg-red-600 hover:text-white cursor-pointer transition duration-200"
          >
            <div className="text-2xl mb-2">{cat.icon}</div>
            <div>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
