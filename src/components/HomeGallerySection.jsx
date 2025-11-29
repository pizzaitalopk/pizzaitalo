import React from 'react';

// Import local images
import img1 from '../assets/images/gallery1.jpg';
import img2 from '../assets/images/gallery2.jpg';
import img3 from '../assets/images/gallery3.jpg';
import img4 from '../assets/images/gallery4.jpg';
import img5 from '../assets/images/gallery5.jpg';
import img6 from '../assets/images/gallery6.jpg';
import img7 from '../assets/images/gallery7.jpg';
import img8 from '../assets/images/gallery8.jpg';


const images = [img1,img2,img3,img4,img5,img6,img7,img8];

const HomeGallerySection = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">Pizza Italo Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl hover:scale-105 transform transition duration-300 cursor-pointer">
              <img src={img} alt={`Gallery ${idx+1}`} className="w-full object-cover mb-4 shadow-lg hover:brightness-110 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;