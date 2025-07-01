import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TourResults() {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`https://sandbox.viator.com/partner/v1/products/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "exp-api-key": "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2", // Replace with production key after certification
          },
          body: JSON.stringify({
            topX: 20,
            sortOrder: "RELEVANCE",
            categoryId: categoryId,
            currencyCode: "USD",
          }),
        });

        const data = await response.json();

        if (data?.data) {
          setTours(data.data);
        } else {
          setTours([]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchTours();
    }
  }, [categoryId]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Tour Results</h1>

      {loading && <p className="text-gray-200">Loading tours...</p>}

      {error && (
        <p className="text-red-500 font-semibold">Failed to load tours. Please try again.</p>
      )}

      {!loading && !error && tours.length === 0 && (
        <p className="text-red-500 font-semibold">No tours found for this category.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {tours.map((tour) => (
          <div key={tour.productCode} className="border border-gray-700 rounded-lg p-4 bg-white text-black">
            <h2 className="text-lg font-bold mb-2">{tour.title}</h2>
            <img
              src={tour.images?.[0]?.url || ""}
              alt={tour.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <p className="text-sm text-gray-700 line-clamp-3">{tour.shortDescription}</p>
            <p className="text-red-700 font-bold mt-2">${tour.price ? tour.price.formatted : "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
