// src/pages/Cars.jsx
import React from "react";

export default function Cars() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 lg:px-32 text-charcoal">
      <h1 className="text-2xl md:text-3xl font-bold text-red-primary mb-6 text-center">
        Explore Car Deals (Affiliate Based)
      </h1>

      <p className="text-base text-center max-w-2xl mx-auto mb-8">
        Discover car rental and purchase opportunities.
        Click the buttons below to explore available vehicles, deals, and rental offers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Affordable Car Rentals</h2>
          <p className="text-sm mb-4">Get the best prices for daily or weekly car rentals worldwide.</p>
          <a
            href="https://affiliate-link-for-car-rentals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            View Deals
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Buy Used or New Cars</h2>
          <p className="text-sm mb-4">Browse car listings from top global marketplaces via affiliate partners.</p>
          <a
            href="https://affiliate-link-for-car-sales.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Explore Listings
          </a>
        </div>
      </div>
    </div>
  );
}
