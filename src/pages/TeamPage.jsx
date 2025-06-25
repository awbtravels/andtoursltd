// src/pages/Team.jsx
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Team() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-primary mb-6">👥 Meet Our Team</h1>

      <div className="space-y-6 text-base text-gray-800 leading-relaxed">
        <div>
          <p className="font-bold text-lg">• Hon. Amos Ajibola</p>
          <p className="italic">Chief Executive Officer</p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-primary" /> 
            <a href="mailto:hon.amos@awbtravelsandtours.com" className="text-blue-600 underline">
              hon.amos@awbtravelsandtours.com
            </a>
          </p>
        </div>

        <div>
          <p className="font-bold text-lg">• Sikemi Akinnibo</p>
          <p className="italic">General Manager</p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-primary" />
            <a href="mailto:gmsikemi@awbtravelsandtours.com" className="text-blue-600 underline">
              gmsikemi@awbtravelsandtours.com
            </a>
          </p>
        </div>

        <div>
          <p className="font-bold text-lg">• Mopelade Akindiya</p>
          <p className="italic">Human Resources</p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-primary" />
            <a href="mailto:hr@awbtravelsandtours.com" className="text-blue-600 underline">
              hr@awbtravelsandtours.com
            </a>
          </p>
        </div>

        <div>
          <p className="font-bold text-lg">• Iyabo Akins</p>
          <p className="italic">Customer Service Lead</p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-red-primary" />
            <a href="mailto:customerservice@awbtravelsandtours.com" className="text-blue-600 underline">
              customerservice@awbtravelsandtours.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhone className="text-red-primary" />
            <span className="text-gray-700 font-medium">+2348102985914</span>
          </p>
        </div>
      </div>
    </div>
  );
}
