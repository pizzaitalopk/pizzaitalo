import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banner/banner1.webp";
import banner2 from "../assets/images/banner/banner2.webp";
import banner3 from "../assets/images/banner/banner3.webp";
import banner4 from "../assets/images/banner/banner4.webp";

const HomeHeroSection = () => {
  // Preload images for faster transition
  useEffect(() => {
    [banner1, banner2, banner3, banner4].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const slides = [
    {
      img: banner1,
      title: "Authentic Italian Pizza",
      desc: "Fresh ingredients, wood‑fired perfection, and unforgettable taste.",
    },
    {
      img: banner2,
      title: "Hot & Crispy Every Time",
      desc: "Experience premium flavors crafted with passion and heart.",
    },
    {
      img: banner3,
      title: "Made With Love and Taste",
      desc: "A slice of Italy delivered straight to your doorstep.",
    },
    {
      img: banner4,
      title: "Your Hunger, Our Pizza",
      desc: "Delicious. Fresh. Irresistible.",
    },
  ];

  const durations = [3000, 3000, 3000 , 4000]; // slide durations
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, durations[index]);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center transition-all duration-700"
      style={{ backgroundImage: `url(${slides[index].img})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-left text-white z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        <div className="transition-all duration-700">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {slides[index].title}
          </h1>
          <p className="max-w-xl text-lg sm:text-xl text-gray-200 mb-6">
            {slides[index].desc}
          </p>
          <Link to="/order">
            <button className="px-6 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition">
              Order Now
            </button>
          </Link>
        </div>

        {/* Optional Logo */}
        <div className="hidden lg:block">
          <img
            src="/logo.png"
            alt="Pizza Italo Logo"
            className="w-40 h-40 object-contain drop-shadow-2xl animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
