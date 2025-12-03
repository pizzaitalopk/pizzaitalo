import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import local images (example: g1.jpg to g10.jpg)
import g1 from "../assets/images/menu_gallery/g1.jpg";
import g2 from "../assets/images/menu_gallery/g2.jpg";
import g3 from "../assets/images/menu_gallery/g3.jpg";
import g4 from "../assets/images/menu_gallery/g4.jpg";
import g14 from "../assets/images/menu_gallery/g14.jpg";
import g6 from "../assets/images/menu_gallery/g6.jpg";
import g7 from "../assets/images/menu_gallery/g7.jpg";
import g8 from "../assets/images/menu_gallery/g8.jpg";
import g9 from "../assets/images/menu_gallery/g9.jpg";
import g10 from "../assets/images/menu_gallery/g10.jpg";

const images = [g1, g2, g3, g4, g14, g6, g7, g8, g9, g10];

const HomeGallerySection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-black py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          Pizza Italo Gallery
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Scrollable Images */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar pb-4"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[260px] md:min-w-[300px] lg:min-w-[350px] overflow-hidden rounded-xl flex-shrink-0 hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-72 object-cover shadow-lg hover:brightness-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
