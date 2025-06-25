import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Grace A.",
    message: "AWB Travels handled my visa process professionally and smoothly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael T.",
    message: "Their customer support and tour planning were top-notch. I’ll definitely use AWB again.",
    rating: 4,
  },
  {
    name: "Fatima O.",
    message: "Best travel company I've dealt with. Fast service and they care about customer satisfaction.",
    rating: 5,
  },
];

const TestimonialsWithSlider = () => {
  const imageSliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const animationImages = Array.from({ length: 30 }, (_, i) => `/animation/${i + 1}.jpeg`);

  return (
    <div
      className="w-full py-10 px-4 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bigben.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 md:p-10">
        
        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-primary mb-4">
            What Our Clients Say
          </h2>
          <Slider {...testimonialSliderSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-4">
                <p className="text-lg font-medium text-gray-700 italic mb-2">“{t.message}”</p>
                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
                <p className="text-sm font-semibold text-gray-600">– {t.name}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Sliding Animation Image Section */}
        <div className="w-full h-72 md:h-full">
          <Slider {...imageSliderSettings}>
            {animationImages.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-72 md:h-96 object-contain rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWithSlider;
