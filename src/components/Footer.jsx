// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram, FaFacebook, FaWhatsapp, FaYoutube,
  FaTiktok, FaTwitter, FaLinkedin, FaYelp, FaPinterest
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="AWB Logo" className="h-12 mb-4" />
          <p className="font-bold text-red-primary">AWB Travels and Tours Ltd</p>
          <p>RC: 7177769</p>
          <p className="mt-2 text-sm italic">...fulfilling your dream life</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-red-primary font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-red-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-primary">About</Link></li>
            <li><Link to="/consultation" className="hover:text-red-primary">Consultation</Link></li>
            <li><Link to="/insurance" className="hover:text-red-primary">Insurance</Link></li>
            <li><Link to="/team" className="hover:text-red-primary">Our Team</Link></li>
            <li><Link to="/testimonials" className="hover:text-red-primary">Testimonials</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-red-primary font-bold mb-2">Contact</h4>
          <p className="text-sm">
            <strong>Head Office:</strong><br />
            Express Way, Adj. Mardie Grazz Alao Akala, New Garage Road, Ibadan 200257, Nigeria
          </p>
          <p className="mt-2 text-sm">
            <strong>Lagos Branch:</strong><br />
            Block F1, Shop 13, Bola Ahmed Tinubu Rd, Complex, Ojokoro 100005, Lagos
          </p>
          <p className="mt-2 text-sm">
            📞 +2348026028245<br />
            📞 +2348102985914<br />
            ✉ info@awbtravelsandtours.com<br />
          
            ✉ customerservice@awbtravelsandtours.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-red-primary font-bold mb-2">Connect With Us</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="https://www.instagram.com/awbtravelsandtours_ltd?igsh=NmZ1cG85bjdqYzg4&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="inline mr-2" />Instagram</a></li>
            <li><a href="https://www.facebook.com/share/1Adryh8WSU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook className="inline mr-2" />Facebook</a></li>
            <li><a href="https://whatsapp.com/channel/0029VbAYnee7NoZyRmuvrT2P" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="inline mr-2" />WhatsApp</a></li>
            <li><a href="http://www.youtube.com/@AWBTRAVELSAndToursLTD-pf5qf" target="_blank" rel="noopener noreferrer"><FaYoutube className="inline mr-2" />YouTube</a></li>
            <li><a href="https://www.tiktok.com/@awb_travels_and_toursltd" target="_blank" rel="noopener noreferrer"><FaTiktok className="inline mr-2" />TikTok</a></li>
            <li><a href="https://x.com/AwbTravelsnTour?t=ArfjB" target="_blank" rel="noopener noreferrer"><FaTwitter className="inline mr-2" />Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/awb-travles-and-tours-ltd-a717442b5" target="_blank" rel="noopener noreferrer"><FaLinkedin className="inline mr-2" />LinkedIn</a></li>
            <li><a href="https://www.yelp.com/user_details?userid=J0gFE-D10yQPtY9cKX9thA" target="_blank" rel="noopener noreferrer"><FaYelp className="inline mr-2" />Yelp</a></li>
            <li><a href="https://www.pinterest.com/awbtravelsandtours/" target="_blank" rel="noopener noreferrer"><FaPinterest className="inline mr-2" />Pinterest</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-10 text-sm border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} AWB Travels and Tours Ltd. All rights reserved.
      </div>
    </footer>
  );
}
