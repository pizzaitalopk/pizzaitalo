import React from "react";
import Seo from '../components/Seo';
import { MapPin, Phone, Clock, Star } from "lucide-react";

// Import gallery images
import g1 from "../assets/images/menu_gallery/g1.jpg";
import g2 from "../assets/images/menu_gallery/g2.jpg";
import g3 from "../assets/images/menu_gallery/g3.jpg";
import g4 from "../assets/images/menu_gallery/g4.jpg";
import g5 from "../assets/images/menu_gallery/g5.jpg";
import g6 from "../assets/images/menu_gallery/g6.jpg";
import g7 from "../assets/images/menu_gallery/g7.jpg";
import g8 from "../assets/images/menu_gallery/g8.jpg";
import g9 from "../assets/images/menu_gallery/g9.jpg";
import g10 from "../assets/images/menu_gallery/g10.jpg";
import g11 from "../assets/images/menu_gallery/g11.jpg";
import g12 from "../assets/images/menu_gallery/g12.jpg";
import g13 from "../assets/images/menu_gallery/g13.jpg";
import g14 from "../assets/images/menu_gallery/g14.jpg";
import g15 from "../assets/images/menu_gallery/g15.jpg";
import g16 from "../assets/images/menu_gallery/g16.jpg";
import g17 from "../assets/images/menu_gallery/g17.jpg";
import g18 from "../assets/images/menu_gallery/g18.jpg";
import g19 from "../assets/images/menu_gallery/g19.jpg";
import g20 from "../assets/images/menu_gallery/g20.jpg";
import g21 from "../assets/images/menu_gallery/g21.jpeg";
import g22 from "../assets/images/menu_gallery/g22.jpeg";
import g23 from "../assets/images/menu_gallery/g23.jpeg";
import g24 from "../assets/images/menu_gallery/g24.jpeg";
import g25 from "../assets/images/menu_gallery/g25.webp";

// Banner images
import banner1 from "../assets/images/banner/banner1.webp";
import banner2 from "../assets/images/banner/banner2.webp";
import banner3 from "../assets/images/banner/banner3.webp";
import banner4 from "../assets/images/banner/banner4.webp";



const images = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25
];

const Gallery = () => {
  return (
    <>
     {/* Page-level SEO */}
      <Seo 
        title="Gallery | Pizza Italo"
        description="Explore our Pizza Italo restaurant gallery with photos of our delicious pizzas, interiors, and ambience."
        keywords="pizza gallery, restaurant photos, Pizza Italo, Italian pizza, food photos"
        url="https://pizza-italo.vercel.app/gallery"
        image="/logo.png"  // OG image
      />

      {/* PAGE CONTENT */}

        <section className="w-full bg-black text-white">

      {/* HERO SECTION WITH BANNER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={banner1}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            Pizza Italo
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
            Bahawalnagar’s most beloved fast food restaurant — serving Pizzas, Burgers
            and fast food items with unmatched taste & quality.
          </p>
        </div>
      </div>

      {/* INFO SECTION WITH LOGO */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-yellow-400">Restaurant Info</h2>
          <p className="flex items-center gap-3 text-gray-300">
            <Star className="text-yellow-400" />
            <span className="text-lg">3.9/5 based on 293 reviews • 72% recommend</span>
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <Clock className="text-yellow-400" />
            <span className="text-lg">Open Now · Closes 3 AM</span>
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <MapPin className="text-yellow-400" />
            <span className="text-lg">Chishtian Rd, near Punjab Bank, Bahawalnagar</span>
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <Phone className="text-yellow-400" />
            <span className="text-lg">+92 333 3110002</span>
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl bg-black flex items-center justify-center p-4">
          <img src={'logo.png'} className="w-64 object-contain" />
        </div>
      </div>
      {/* GALLERY SECTION – MIXED SIZE IMAGES + BANNERS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          Our Restaurant Gallery
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

          {/* Banner placements */}
          {[banner2, banner3, banner4].map((bnr, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg break-inside-avoid">
              <img
                src={bnr}
                className="w-full object-cover hover:opacity-80 hover:scale-105 transition duration-300"
              />
            </div>
          ))}

          {/* Mixed size images */}
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg break-inside-avoid">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className={`w-full object-cover hover:opacity-80 hover:scale-105 transition duration-300 ${
                  idx % 6 === 0 ? "h-96" : idx % 5 === 0 ? "h-72" : idx % 3 === 0 ? "h-64" : "h-56"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full bg-yellow-400 py-10 text-black text-center text-xl font-semibold mt-10">
        "Good Food, Good Mood — Experience the True Taste of Bahawalnagar!"
      </div>
    </section>
    </>
  );
};

export default Gallery;