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
          `https://sandbox.viator.com/partner/v1/products/search?topX=12&categoryId=${categoryId}&currencyCode=USD&sortOrder=RECOMMENDED&destId=684`
          , {
          headers: {
            'Accept': 'application/json',
            'exp-api-key': '8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2', // Your Viator sandbox API key
          }
        });

        if (!response.ok) throw new Error('API error');

        const data = await response.json();
        setTours(data.data || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load tours. Please try again.');
      }
    };

    fetchTours();
  }, [categoryId]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Tour Results</h1>

      {error && <p className="text-red-400">{error}</p>}

      {tours.length === 0 && !error && (
        <p className="text-gray-400">Loading tours...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.productCode} className="border border-red-500 rounded-lg p-4 hover:bg-red-500 hover:text-white transition">
            <h2 className="text-xl font-semibold">{tour.title}</h2>
            <p>{tour.shortDescription?.substring(0, 120)}...</p>
            <a
              href={tour.webURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm underline text-white"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourResults;
