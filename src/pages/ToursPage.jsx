import React from "react";
import { useNavigate } from "react-router-dom";

const tourCategories = [
  { name: "City Tours", icon: "🏙️", categoryId: 20326 },
  { name: "Adventure Tours", icon: "🌄", categoryId: 20324 },
  { name: "Cultural & Historical", icon: "🏛️", categoryId: 10003 },
  { name: "Day Trips & Excursions", icon: "🚌", categoryId: 20455 },
  { name: "Boat & Cruise Tours", icon: "🚢", categoryId: 10001 },
  { name: "Wildlife & Safari", icon: "🦁", categoryId: 20409 },
  { name: "Sightseeing Packages", icon: "🗺️", categoryId: 20408 },
  { name: "Religious Pilgrimages", icon: "🙏", categoryId: 20412 },
  { name: "Private & Group Tours", icon: "👥", categoryId: 10004 },
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
            key={cat.categoryId}
            onClick={() => handleCategoryClick(cat.categoryId)}
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
