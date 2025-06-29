import React, { useEffect } from "react";

export default function Hotels() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tpscr.com/content?currency=usd&trs=430601&shmarker=644340&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF0101ff&color_button=%23FF2101ff&color_icons=%23FF3018ff&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=23&no_labels=true&plain=true&promo_id=7873&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";
    document.getElementById("hotellook-widget-container").appendChild(script);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-700 mb-2">AWB Hotel Booking</h1>
        <p className="text-gray-700 italic">....fulfilling your dream life</p>
        <p className="mt-2 text-lg text-gray-800">
          Search and reserve top-rated hotels worldwide from your trusted AWB Travels platform.
        </p>
      </div>

      {/* Hotellook Widget Container */}
      <div
        id="hotellook-widget-container"
        className="w-full min-h-[380px] border border-gray-200 rounded-xl overflow-hidden"
      ></div>
    </div>
  );
}
