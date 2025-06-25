// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css"; // ✅ Tailwind CSS

// Page components
import HomePage from "./pages/HomePage";
import ConsultationPage from "./pages/ConsultationPage";
import ConsultationSuccess from "./pages/ConsultationSuccess";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Insurance from "./pages/Insurance";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import Team from "./pages/TeamPage";
import NewsPage from "./pages/NewsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Cars from "./pages/Cars"; // ✅ Newly added
import Properties from "./pages/Properties"; // ✅ Newly added

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="consultation-success" element={<ConsultationSuccess />} />
          <Route path="flights" element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="cars" element={<Cars />} /> {/* ✅ Cars Route */}
          <Route path="properties" element={<Properties />} /> {/* ✅ Properties Route */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
