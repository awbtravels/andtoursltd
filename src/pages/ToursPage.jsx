// src/pages/TourResults.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TourResults() {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await fetch(`https://sandbox-api.viator.com/partner/products/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "exp-api-key": "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2" // ✅ Sandbox API Key
          },
          body: JSON.stringify({
            filters: {
              categories: [categoryId]
            },
            sortOrder: "RELEVANCE",
            count: 12
          })
        });

        const data = await response.json();

        if (data?.data?.length > 0) {
          setTours(data.data);
          setError(null);
        } else {
          setError("No tours found.");
        }
      } catch (err) {
        console.error("Viator API error:", err);
        setError("Failed to load tours. Please try again.");
      }
    }

    fetchTours();
  }, [categoryId]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">{tours.length.toLocaleString()} Tours</h1>

      {error && (
        <p className="text-red-500 text-lg font-medium">{error}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div key={tour.productCode} className="border rounded p-4 shadow hover:shadow-md transition">
            <img src={tour.images?.[0]?.url || "/no-image.jpg"} alt={tour.title} className="w-full h-48 object-cover rounded mb-3" />
            <h2 className="text-lg font-semibold">{tour.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{tour.description?.substring(0, 100)}...</p>
            <p className="text-green-600 font-bold">${tour.price?.formatted || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
