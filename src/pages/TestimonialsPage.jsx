// src/pages/TestimonialsPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Collins A.",
    message:
      "I thought it wasn’t going to be easy to get a job until I met Honourable. He assisted from day 1 until I got the JavaScript work in Canada. I no go lie, AWB TRAVELS AND TOURS are good in what they do and I give them 💯",
    stars: 5,
  },
  {
    name: "James O.",
    message:
      "I never believed I could get a Canada tourist visa so easily until I contacted AWB Travels. Everything was smooth, no stress at all. Thank you for making my travel dream come true.",
    stars: 5,
  },
  {
    name: "Sarah J.",
    message:
      "AWB Travels helped me secure my Canadian study visa. Their advice, especially with honourable support were top notch. I’m now studying in Toronto. May God bless this company",
    stars: 5,
  },
  {
    name: "Gabriel O.",
    message:
      "AWB Travels and Tours Ltd made my Canada work visa journey very easy. Their team was professional and always ready to help. If you want to travel the right way, go through them!",
    stars: 5,
  },
  {
    name: "Akolade Y.",
    message:
      "As a barber, I thought it would be hard to work abroad. But AWB Travels showed me say e Dey easy and possible. Today, I’m in New Zealand, cutting hair and living well. God bless them!",
    stars: 5,
  },
  {
    name: "Emeka C.",
    message:
      "My New Zealand work visa as an electrician was successful, thanks to AWB Travels. They really know their work. I’m now settled and working.",
    stars: 5,
  },
  {
    name: "Cynthia S.",
    message:
      "I got my UK tourist visa with no wahala, all thanks to AWB Travels. They were fast and reliable. I’ve been to London and back. I highly recommend them to everyone.",
    stars: 5,
  },
  {
    name: "Sodeek Y.",
    message:
      "Thank you, AWB Travels, for helping me travel to France. Your service is the best. Everything was clear and quick. I had a wonderful holiday!",
    stars: 5,
  },
  {
    name: "Divine D.",
    message:
      "I don't believe, that Italy, will easy like this. AWB Travels handled everything. Today, I had waka go Rome. Their service is legit! 💯 no long cap 🧢",
    stars: 5,
  },
  {
    name: "Nnena A.",
    message:
      "AWB Travels helped me get my US study visa. From application to interview, they prepared me well. Now I’m studying in the US. I recommend them to any serious student!",
    stars: 5,
  },
  {
    name: "Aminat M.",
    message:
      "If you want to study in America, no dull. AWB Travels na correct plug. My visa don land, and school don start. I thank God, and I thank them!",
    stars: 5,
  },
  {
    name: "Dayo A.",
    message:
      "I used AWB Travels for my Austria tourist visa. Very smooth process, with no delay. I got my visa and travelled with peace of mind. Honourable is such a good man.",
    stars: 5,
  },
  {
    name: "Emmanuel O.",
    message:
      "AWB Travels and Tours Ltd really helped me with my New Zealand tourist visa. They guided me from start to finish, and within weeks, my visa was approved. I’m so grateful.",
    stars: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-primary">
        Client Testimonials
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center gap-1 mb-3 text-yellow-500">
              {Array.from({ length: t.stars }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 italic mb-2">“{t.message}”</p>
            <p className="font-semibold text-charcoal">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
