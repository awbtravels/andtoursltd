// src/pages/ToursPage.jsx
import React from "react";

export default function ToursPage() {
  return (
    <section className="px-6 py-10 text-charcoal">
      <h1 className="text-3xl font-bold text-red-primary mb-4">Explore Tours & Experiences</h1>
      <p className="mb-6 max-w-3xl">
        Discover unforgettable tours, sightseeing adventures, local activities, and cultural experiences with AWB Travels and Tours. Book guided city tours, nature explorations, cruises, and more—all while staying on our trusted platform.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Local & International Tours</h3>
          <p className="text-sm mb-4">Browse affiliate-powered tours across Nigeria and abroad—Dubai, UK, Canada, Kenya, and more.</p>
          <a
            href="https://tour.awbtravelsandtours.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Browse Tours
          </a>
        </div>

        <div className="border p-4 rounded-xl shadow-sm bg-white">
          <h3 className="font-semibold text-lg mb-2">Cultural & Historical Activities</h3>
          <p className="text-sm mb-4">Explore affiliate tour experiences such as safaris, museums, food tastings, and landmark visits.</p>
          <a
            href="https://tour.awbtravelsandtours.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-primary text-white px-4 py-2 rounded hover:bg-red-600"
          >
            View Activities
          </a>
        </div>
      </div>
    </section>
  );
}
