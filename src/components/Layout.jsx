// src/components/Layout.jsx import React, { useState, useEffect } from "react"; import { Link, Outlet } from "react-router-dom"; import Footer from "./Footer"; import Newsletter from "./Newsletter";

export default function Layout() { const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => { const s1 = document.createElement("script"); s1.src = "https://embed.tawk.to/68559a0aadefb9190f5fe0d5/1iu763f2p"; s1.async = true; s1.charset = "UTF-8"; s1.setAttribute("crossorigin", "*"); document.body.appendChild(s1); }, []);

return ( <> {/* HEADER */} <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md"> <div className="flex items-center gap-2"> <Link to="/"> <img src="/logo.png" alt="AWB Logo" className="h-10 w-auto" /> </Link> <div className="text-sm font-semibold text-red-primary"> AWB Travels and Tours Ltd <p className="text-xs text-gray-600">RC: 7177769</p> </div> </div>

{/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-charcoal font-medium">
      <Link to="/" className="hover:text-red-primary">Home</Link>
      <Link to="/consultation" className="hover:text-red-primary">Booking Consultation</Link>
      <Link to="/flights" className="hover:text-red-primary">Flight</Link>
      <Link to="/hotels" className="hover:text-red-primary">Hotel</Link>
      <Link to="/insurance" className="hover:text-red-primary">Insurance</Link>
      <Link to="/cars" className="hover:text-red-primary">Cars</Link>

      {/* Tours Dropdown */}
      <div className="relative group">
        <button className="hover:text-red-primary">Tours ▾</button>
        <ul className="absolute hidden group-hover:block bg-white border shadow-lg mt-2 text-sm w-56 z-50 text-gray-700">
          <li><Link to="/tours/city" className="block px-4 py-2 hover:bg-gray-100">City Tours</Link></li>
          <li><Link to="/tours/adventure" className="block px-4 py-2 hover:bg-gray-100">Adventure Tours</Link></li>
          <li><Link to="/tours/cultural" className="block px-4 py-2 hover:bg-gray-100">Cultural & Historical</Link></li>
          <li><Link to="/tours/day-trips" className="block px-4 py-2 hover:bg-gray-100">Day Trips & Excursions</Link></li>
          <li><Link to="/tours/boat" className="block px-4 py-2 hover:bg-gray-100">Boat & Cruise Tours</Link></li>
          <li><Link to="/tours/safari" className="block px-4 py-2 hover:bg-gray-100">Wildlife & Safari</Link></li>
          <li><Link to="/tours/sightseeing" className="block px-4 py-2 hover:bg-gray-100">Sightseeing Packages</Link></li>
          <li><Link to="/tours/religious" className="block px-4 py-2 hover:bg-gray-100">Religious Pilgrimages</Link></li>
          <li><Link to="/tours/custom" className="block px-4 py-2 hover:bg-gray-100">Private/Custom Tours</Link></li>
          <li><Link to="/tours/group" className="block px-4 py-2 hover:bg-gray-100">Group Tours</Link></li>
        </ul>
      </div>

      <Link to="/properties" className="hover:text-red-primary">Properties</Link>
      <Link to="/services" className="hover:text-red-primary">Our Services</Link>
      <Link to="/about" className="hover:text-red-primary">About</Link>
      <Link to="/team" className="hover:text-red-primary">Our Team</Link>
      <Link to="/news" className="hover:text-red-primary">News</Link>
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
      <Link to="/flights" className="block hover:text-red-primary">Flight</Link>
      <Link to="/hotels" className="block hover:text-red-primary">Hotel</Link>
      <Link to="/insurance" className="block hover:text-red-primary">Insurance</Link>
      <Link to="/cars" className="block hover:text-red-primary">Cars</Link>
      <Link to="/tours" className="block hover:text-red-primary">Tours</Link>
      <Link to="/properties" className="block hover:text-red-primary">Properties</Link>
      <Link to="/services" className="block hover:text-red-primary">Our Services</Link>
      <Link to="/about" className="block hover:text-red-primary">About</Link>
      <Link to="/team" className="block hover:text-red-primary">Our Team</Link>
      <Link to="/news" className="block hover:text-red-primary">News</Link>
      <Link to="/testimonials" className="block hover:text-red-primary">Testimonials</Link>
    </nav>
  )}

  {/* MAIN CONTENT */}
  <main className="min-h-screen bg-white text-charcoal font-sans">
    <Outlet />
  </main>

  {/* NEWSLETTER */}
  <Newsletter />

  {/* FOOTER */}
  <Footer />
</>

); }
