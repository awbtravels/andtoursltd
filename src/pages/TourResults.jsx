// src/pages/TourResults.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TourResults() {
  const { categoryId } = useParams();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://api.sandbox.viator.com/partner/v1/products/search", {
          headers: {
            "exp-api-key": "8170d1d5-4ef1-4019-9f5c-0f0a304a9ad2", // ✅ Sandbox Key
          },
          params: {
            topX: 15,
            sortOrder: "RELEVANCE",
            categoryId: categoryId,
            currencyCode: "USD",
            country: "US",
          },
        });
        setTours(response.data.data);
      } catch (err) {
        setError("Failed to load tours. Please try again.");
      }
      setLoading(false);
    };
    fetchTours();
  }, [categoryId]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-red-700 mb-4 capitalize">
        {categoryId.replace("-", " ")} Tours
      </h1>

      {loading && <p>Loading tours...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.productCode}
            className="border rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={tour.thumbnailURL}
              alt={tour.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{tour.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {tour.shortDescription || "No description available."}
              </p>
              <p className="font-bold text-red-600 mb-2">
                From ${tour.pricingSummary?.fromPrice}{" "}
                {tour.pricingSummary?.currencyCode}
              </p>
              <a
                href={`/tours/details/${tour.productCode}`}
                className="inline-block mt-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
