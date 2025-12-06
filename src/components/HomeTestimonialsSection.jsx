import React, { useState, useEffect } from 'react';

// Reviewer images
import arqamsaleem from '../assets/images/arqamsaleem.webp';
import azeemazeem from '../assets/images/azeemazeem.webp';
import muhammadfaheem from '../assets/images/muhammadfaheem.webp';
import okbro from '../assets/images/okbro.webp';
import azeembodla from '../assets/images/azeembodla.webp';
import raoamir from '../assets/images/raoamir.webp';
import ahmadabrar from '../assets/images/ahmadabrar.webp';
import mubashirelahi from '../assets/images/mubashirelahi.webp';

const testimonials = [
  { name: 'Arqam Saleem', review: 'Pizza Italo is going pathetic day by day. Service is awful.', img: arqamsaleem },
  { name: 'Azeem Azeem', review: 'The pizza was delicious. Service excellent.', img: azeemazeem },
  { name: 'Muhammad Fehmeed', review: 'Very Good food, Taste was Excellent.', img: muhammadfaheem },
  { name: 'Ok Bro', review: 'Very Good service. Customer are considered.', img: okbro },
  { name: 'Azeem Bodla', review: 'Pizza was delicious. Service excellent.', img: azeembodla },
  { name: 'Rao Amir', review: 'Taste is good, price reasonable. Staff helpful.', img: raoamir },
  { name: 'Ahmad Abrar', review: 'Flavor varies with each visit.', img: ahmadabrar },
  { name: 'Mubashir Elahi', review: 'Food felt extra special. Vibe was perfect.', img: mubashirelahi },
];

const HomeTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Show 1 card on mobile, 2 on tablet, 3 on desktop
  const getVisibleTestimonials = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleTestimonials());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleTestimonials());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible slides
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[idx]);
  }

  return (
    <section className="w-full bg-linear-to-b from-black via-neutral-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          What People Say
        </h2>

        <div className="flex justify-center gap-6 overflow-hidden">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-neutral-900 via-black to-neutral-900 rounded-xl shadow-xl p-6 flex flex-col items-center text-center w-72 transform transition duration-500 hover:scale-105"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-yellow-400"
              />
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{t.name}</h3>
              <p className="text-gray-300">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
