// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import emailjs from "@emailjs/browser";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const form = document.querySelector("#mc-embedded-subscribe-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        const emailInput = document.querySelector("#mce-EMAIL");
        if (emailInput && emailInput.value) {
          emailjs
            .send(
              "service_oave8fr",
              "template_tdg66zs",
              { user_email: emailInput.value },
              "GamSTUvtdCEHyRlM2"
            )
            .then((res) => {
              console.log("Welcome email sent:", res.status);
            })
            .catch((err) => {
              console.error("Newsletter welcome email error:", err);
            });
        }
      });
    }
  }, []);

  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/68559a0aadefb9190f5fe0d5/1iu763f2p";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="AWB Logo" className="h-10 w-auto" />
          </Link>
          <div className="text-sm font-semibold text-red-primary">
            AWB Travels and Tours Ltd
            <p className="text-xs text-gray-600">RC: 7177769</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-charcoal font-medium">
          <Link to="/" className="hover:text-red-primary">Home</Link>
          <Link to="/consultation" className="hover:text-red-primary">Booking Consultation</Link>
          <Link to="/tours" className="hover:text-red-primary">Tours</Link>
          <Link to="/flights" className="hover:text-red-primary">Flight</Link>
          <Link to="/hotels" className="hover:text-red-primary">Hotel</Link>
          <Link to="/insurance" className="hover:text-red-primary">Insurance</Link>
          <Link to="/cars" className="hover:text-red-primary">Cars</Link>
          <Link to="/properties" className="hover:text-red-primary">Properties</Link>
          <Link to="/services" className="hover:text-red-primary">Our Services</Link>
          <Link to="/about" className="hover:text-red-primary">About</Link>
          <a href="https://awbtravelsandtours.com/news" className="hover:text-red-primary">News</a>
          <Link to="/testimonials" className="hover:text-red-primary">Testimonials</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-charcoal focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white shadow text-sm text-charcoal font-medium space-y-2">
          <Link to="/" className="block hover:text-red-primary">Home</Link>
          <Link to="/consultation" className="block hover:text-red-primary">Booking Consultation</Link>
          <Link to="/tours" className="block hover:text-red-primary">Tours</Link>
          <Link to="/flights" className="block hover:text-red-primary">Flight</Link>
          <Link to="/hotels" className="block hover:text-red-primary">Hotel</Link>
          <Link to="/insurance" className="block hover:text-red-primary">Insurance</Link>
          <Link to="/cars" className="block hover:text-red-primary">Cars</Link>
          <Link to="/properties" className="block hover:text-red-primary">Properties</Link>
          <Link to="/services" className="block hover:text-red-primary">Our Services</Link>
          <Link to="/about" className="block hover:text-red-primary">About</Link>
          <a href="https://awbtravelsandtours.com/news" className="block hover:text-red-primary">News</a>
          <Link to="/testimonials" className="block hover:text-red-primary">Testimonials</Link>
        </nav>
      )}

      <main className="min-h-screen bg-white text-charcoal font-sans">
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
