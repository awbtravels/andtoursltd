// src/pages/Properties.jsx
import React from "react";

export default function Properties() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 lg:px-32 text-charcoal">
      <h1 className="text-2xl md:text-3xl font-bold text-red-primary mb-6 text-center">
        Invest in Properties (Affiliate Based)
      </h1>

      <p className="text-base text-center max-w-2xl mx-auto mb-8">
        Explore global real estate opportunities and land investments through our affiliate partners.
        Click below to view listings and make safe, informed property investments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Buy or Lease Properties</h2>
          <p className="text-sm mb-4">Browse affiliate listings for houses, apartments, and commercial properties.</p>
          <a
            href="https://affiliate-link-for-properties.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            View Properties
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Land Investment Opportunities</h2>
          <p className="text-sm mb-4">Secure land investments via vetted affiliate marketplaces and verified agents.</p>
          <a
            href="https://affiliate-link-for-land.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Explore Land Deals
          </a>
        </div>
      </div>
    </div>
  );
}
