import React from "react";

// Import all gallery images
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";
import gallery9 from "../assets/images/gallery9.jpg";
import gallery10 from "../assets/images/gallery10.jpg";
import gallery11 from "../assets/images/gallery11.jpg";

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11
];

const Gallery = () => {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          Our Restaurant Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover brightness-90 hover:brightness-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
