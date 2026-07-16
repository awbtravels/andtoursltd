// src/pages/ServicesPage.jsx
import React from "react";

export default function ServicesPage() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-red-primary mb-8">
        Our Travel Services
      </h1>

      <div className="space-y-8">

        {/* Visa Processing */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            🛂 Visa Processing
          </h2>

          <p className="text-gray-700 mb-4">
            Let us handle the complexities of your visa application. We provide
            professional assistance for the following visa categories:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Tourist Visa</li>
            <li>Business Visa</li>
            <li>Student Visa</li>
            <li>Working Visa</li>
            <li>Family Visa</li>
            <li>Medical Visa</li>
            <li>Job Seeker Visa</li>
          </ul>

          <p className="mt-4 text-gray-700">
            We provide visa support for destinations including the United Kingdom 🇬🇧, Canada 🇨🇦,
            United States 🇺🇸, Schengen 🇪🇺 countries, Australia 🇦🇺, Ireland 🇮🇪, South Africa 🇿🇦,
            New Zealand 🇳🇿, China 🇨🇳, Brazil 🇧🇷, Asia Countries, GCC Countries and many more.
          </p>
        </div>

        {/* Customized Vacation Packages */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            🌍 Customized Vacation Packages
          </h2>

          <p className="text-gray-700">
            Dreaming of a romantic getaway, honeymoon, family vacation, group
            tour, or solo adventure? We create customized travel packages based
            on your budget, interests, and travel goals for an unforgettable
            experience.
          </p>
        </div>

        {/* Tour Packages */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            🏖️ Tour Packages
          </h2>

          <p className="text-gray-700 mb-4">
            Explore the world with our carefully planned local and international
            tour packages. Whether you're traveling for leisure, business, or
            adventure, we have the perfect package for you.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Honeymoon Packages</li>
            <li>Family Vacation Packages</li>
            <li>Group Tours</li>
            <li>Solo Travel Packages</li>
            <li>Luxury Holidays</li>
            <li>Beach & Island Getaways</li>
            <li>Adventure Tours</li>
            <li>Religious & Pilgrimage Tours</li>
            <li>Cultural & Heritage Tours</li>
            <li>Business & Corporate Travel</li>
            <li>Educational & Student Tours</li>
            <li>Weekend Getaways</li>
          </ul>

          <p className="mt-4 text-gray-700">
            Packages can include flights, hotel accommodation, airport
            transfers, guided sightseeing, travel insurance, and visa
            assistance, all tailored to your budget and preferences.
          </p>
        </div>

        {/* Birth Tourism */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            ✈️ Birth Tourism
          </h2>

          <p className="text-gray-700 mb-4">
            We help you plan and manage the complete process of giving birth in
            countries that offer birthright citizenship. From travel planning
            to postnatal support, we make the journey seamless.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Our Birth Tourism Services Include:
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Visa Processing</li>
            <li>Hospital Booking</li>
            <li>Accommodation Arrangements</li>
            <li>Airport Pickup & Transfers</li>
            <li>Medical Appointment Scheduling</li>
            <li>Postnatal Support</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Available Destinations
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🇲🇽 Mexico</li>
            <li>🇧🇧 Barbados</li>
            <li>🇦🇷 Argentina</li>
            <li>🇧🇷 Brazil</li>
            <li>🇨🇦 Canada</li>
            <li>🇺🇾 Uruguay</li>
          </ul>
        </div>

        {/* Other Services */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Other Travel & Business Services
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Flight Booking & Itinerary Preparation</li>
            <li>Travel Insurance (Medical, Student, Business & Tourist)</li>
            <li>Hotel Reservations (Local & International)</li>
            <li>Airport Protocol Services</li>
            <li>Airport Transfers & Car Rentals</li>
            <li>International Passport Assistance</li>
            <li>Police Clearance Certificate (PCC) Processing</li>
            <li>Document Legalization & Authentication</li>
            <li>Business Registration (CAC)</li>
            <li>Booking of Flights, Ships, Cruises, Trains & Taxis</li>
            <li>Tourist Attraction & Event Ticket Bookings</li>
            <li>Daily Immigration News & Travel Tips</li>
            <li>Car & Property Sales</li>
            <li>Logistics & Construction Projects</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
