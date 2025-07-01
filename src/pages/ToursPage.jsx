// src/pages/ToursPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const tourCategories = [
  { id: '001', name: 'City Tours' },
  { id: '002', name: 'Adventure Tours' },
  { id: '003', name: 'Cultural Tours' },
  { id: '004', name: 'Sightseeing Passes' },
  { id: '005', name: 'Historical Tours' },
  { id: '006', name: 'Food & Drink' },
  { id: '007', name: 'Nature & Wildlife' },
  { id: '008', name: 'Luxury & Special Occasions' },
];

const ToursPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/tours/category/${categoryId}`);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-red-500 mb-6">Explore Our Tours</h1>
      <p className="mb-4 text-gray-300">
        Select a tour category below to explore available tours powered by Viator.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tourCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="cursor-pointer border border-red-500 p-4 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
