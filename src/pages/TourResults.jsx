// src/pages/TourResults.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TourResults = () => {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(
          `https://sandbox.viator.com/partner/v1/products/search?topX=10&categoryId=${categoryId}&destId=6840`,
          {
            headers: {
              'Accept': 'application/json',
              'exp-api-key': '8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2',
            },
          }
        );

        const data = await response.json();
        console.log("Viator API Response:", data); // ✅ Use browser console to check response

        if (data && Array.isArray(data.data)) {
          setTours(data.data);
        } else {
          setError('No tours found for this category.');
          console.error("Unexpected API response:", data);
        }
      } catch (err) {
        setError('Failed to load tours. Please try again.');
        console.error("Fetch error:", err);
      }
    };

    if (categoryId) {
      fetchTours();
    }
  }, [categoryId]);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-red-500">Tour Results</h2>
      {error && <p className="text-red-400">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.productCode} className="border rounded-xl p-4 bg-gray-800">
            <img
              src={tour.thumbnailURL}
              alt={tour.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{tour.title}</h3>
            <p className="text-sm">{tour.description?.substring(0, 100)}...</p>
            <p className="mt-2 text-green-400 font-semibold">
              From {tour.pricingSummary?.fromPrice?.formatted} {tour.pricingSummary?.fromPrice?.currencyCode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourResults;
