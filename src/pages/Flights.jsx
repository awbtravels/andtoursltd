// src/pages/Flights.jsx
import React, { useEffect } from "react";

export default function Flights() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tpscr.com/content?currency=usd&trs=430601&shmarker=644340&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23DD4B32ff&color_button=%23DD3232ff&color_icons=%23DD3232ff&dark=%23262626&light=%23FFFFFFff&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%23DD3232ff&border_radius=0&no_labels=true&plain=true&promo_id=7879&campaign_id=100";
    script.async = true;
    script.charset = "utf-8";
    document.getElementById("aviasales-widget-container").appendChild(script);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-700 mb-2">AWB Flights Booking</h1>
        <p className="text-gray-700 italic">....fulfilling your dream life</p>
        <p className="mt-2 text-lg text-gray-800">
          Find and book flights from hundreds of airlines worldwide. Secure, fast, and fully inside our platform.
        </p>
      </div>

      {/* Aviasales Widget Container */}
      <div
        id="aviasales-widget-container"
        className="w-full min-h-[380px] border border-gray-200 rounded-xl overflow-hidden"
      ></div>
    </div>
  );
}
