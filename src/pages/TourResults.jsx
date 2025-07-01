// src/pages/TourResults.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TourResults() {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/getTours?categoryId=${categoryId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tour data");
        }

        const data = await response.json();
        setTours(data.products || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load tours. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [categoryId]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Tour Results</h1>

      {loading && <p className="text-gray-600">Loading tours...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.length === 0 ? (
            <p className="text-red-600">No tours found for this category.</p>
          ) : (
            tours.map((tour) => (
              <div
                key={tour.productCode}
                className="border rounded shadow p-4 hover:shadow-md transition"
              >
                <img
                  src={tour.images?.[0]?.thumbnailUrl || "/default-tour.jpg"}
                  alt={tour.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">{tour.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{tour.shortDescription}</p>
                <p className="text-sm font-semibold text-red-700">
                  From ${tour.retailPrice?.formatted || "N/A"}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
