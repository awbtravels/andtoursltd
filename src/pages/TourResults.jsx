// src/pages/TourResults.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TourResults = () => {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = '8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2'; // Viator Sandbox Key

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(`https://api.sandbox.viator.com/partner/v1/products/search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'exp-api-key': apiKey
          },
          body: JSON.stringify({
            categoryId: [categoryId],
            currency: 'USD',
            sortOrder: 'RELEVANCE',
            count: 12
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }

        const data = await response.json();
        setTours(data.data || []);
      } catch (err) {
        setError('Failed to load tours. Please try again.');
      }
    };

    fetchTours();
  }, [categoryId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-500 mb-4">{tours.length} Tours</h1>
      {error && <p className="text-red-400">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.productCode} className="bg-white rounded-xl p-4 shadow">
            <img src={tour.thumbnailUrl} alt={tour.title} className="rounded mb-2 h-48 w-full object-cover" />
            <h2 className="font-semibold text-lg mb-1">{tour.title}</h2>
            <p className="text-sm text-gray-600">{tour.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourResults;
