// src/pages/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-white text-charcoal min-h-screen px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-red-primary">
          About Us
        </h1>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          <strong>AWB TRAVELS AND TOURS LTD</strong> (RC: 7177769), our purpose is to instill
          remarkable experiences in the memories of our customers. A few years ago,
          we began by facilitating Student Visas, Visitor Visas, Conference/Business
          Visas, Medical Visas, and Working Visas and have successfully helped countless
          numbers of students to secure admission abroad, study and graduate successfully.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          We offer vacation packages abroad and within Nigeria. We assist with Visa
          processing, Flight booking, Hotel Reservation, Business Registration (CAC), and
          International Passport assistance. Our goal is to provide the very best customer
          service and customer experience.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          We aim to inspire the world by simultaneously delivering happiness to customers,
          employees, and our partners in a sustainable way. We hope that in the nearest future,
          AWB TRAVELS AND TOURS LTD will be acknowledged as a travel company that simply makes
          traveling easy.
        </p>

        <h2 className="text-2xl font-bold text-red-primary mt-10 mb-4">Who We Are</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          We are a travel agency established on April 27, 2020, to be one of the leading travel
          and tourism companies in the world. All the members of our team display a high level of
          Integrity and Professionalism, to ensure that we meet and exceed customer expectations
          throughout the entire process. We take care of all the hard work for you by offering a
          complete travel service package.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          All the members of our team have years of experience in the travel and tourism industry
          and are readily available to help with all travel needs. We will continue to ensure that
          we meet all your needs and serve you with a smile; we are inspired to go the extra mile always.
        </p>

        <h2 className="text-2xl font-bold text-red-primary mt-10 mb-4">Our Vision</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Our vision is to become a fully digital travel agency that seamlessly serves individuals
          and corporate organizations across the globe. We aim to be a one-stop platform where clients
          can: book travel, access tourist tickets, get immigration updates, and enjoy stress-free planning.
        </p>

        <h2 className="text-2xl font-bold text-red-primary mt-10 mb-4">Our Mission</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Our mission is to become a trusted travel agency known for holiday travels, study programs,
          business trips, and more. We deliver top-notch services, build lasting relationships, and
          offer a broad range of solutions from bookings to immigration support.
        </p>

        <h2 className="text-2xl font-bold text-red-primary mt-10 mb-4">What We Live By</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Our core values are integrity, professionalism, and exceptional customer service. These values
          are non-negotiable and are central to our identity.
        </p>

        <h2 className="text-2xl font-bold text-red-primary mt-10 mb-4">Why Use Our Services</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          At AWB Travels, we pride ourselves on delivering personalized travel solutions that match every
          customer’s unique tastes, needs, and budget. Whether you’re planning a simple vacation or a complex
          international trip, we go the extra mile to ensure a smooth and stress-free experience.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          One of our greatest strengths is outstanding customer service. Our dedicated support team is available
          from 9:00 AM to 5:00 PM, Monday to Friday, to respond promptly to all inquiries. Even outside office hours,
          your calls are routed to a professional agent, so we’re always within reach when you need us.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-10">
          We also offer a wide range of additional services, including flight bookings, train, ship, and ride reservations,
          global tour and ticketing support, access to tourist center bookings worldwide, the latest immigration news
          updates, and expert travel tips and guides. At AWB Travels, your journey begins with us and we ensure it’s safe,
          affordable, and unforgettable.
        </p>

        {/* ✅ Styled Download Button */}
        <div className="text-center mt-12">
          <a
            href="/AWB_Company_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-primary text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 shadow-lg"
          >
            📄 Download Company Profile
          </a>
        </div>
      </section>
    </main>
  );
}
