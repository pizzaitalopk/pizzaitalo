import React from 'react';
import { Users, Star, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAboutSection = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-16 items-center">

        {/* Image/Visual Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="logo.png" 
            alt="Pizza Italo" 
            className="rounded-xl shadow-2xl object-cover w-full h-full max-h-[500px] border-2 border-amber-500"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-400 drop-shadow-lg">Pizza Italo</h2>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed drop-shadow-lg">
            Welcome to Pizza Italo, Bahawalnagar’s most beloved fast food restaurant. 
            Serving delicious pizzas, burgers, and fast food items with unmatched taste and quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-amber-400" />
              <span>3.9/5 based on 293 reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-amber-400" />
              <span>72% recommend</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-amber-400" />
              <span>Open Now · Closes 3 AM</span>
            </div>
          <div className="flex items-center gap-3">
  <MapPin className="h-6 w-6 text-amber-400" />
  <a 
    href="https://maps.app.goo.gl/TGcW4CGYTQq6vwfR8"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-amber-400 transition"
  >
    Chishtian Rd, near Punjab Bank, Bahawalnagar
  </a>
</div>
          </div>

          <div className="flex items-center gap-3">
  <Phone className="h-6 w-6 text-amber-400" />
  <a 
    href="https://wa.me/923333110002" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-amber-400 transition"
  >
    +92 333 3110002
  </a>
</div>

          <Link 
            to="/order" 
            className="mt-6 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg transition duration-200"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeAboutSection;
