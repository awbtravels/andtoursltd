import React from "react";
import TestimonialsWithSlider from "../components/TestimonialsWithSlider";

const HomePage = () => {
  return (
    <div className="bg-white text-charcoal p-10">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
        ✅ Home Page Loaded Successfully!
      </h1>

      <TestimonialsWithSlider />
    </div>
  );
};

export default HomePage;
