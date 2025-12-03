import { ShoppingBag } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeBannerSection = () => {
  return (
    <section className="w-full h-[50vh] flex items-center justify-center bg-black flex-col gap-15 mb-5">
      <div className="text-center ">
        <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 mb-4">
          ORIGINAL RECIPE SINCE 2005
        </h1>
        <p className="text-white text-xl md:text-2xl">
          Experience the authentic taste of our signature pizzas.
        </p>
      </div>
      <Link to={'/order'}> <button className="flex items-center gap-2 ml-4 px-8 py-3.5 text-md font-semibold rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all ring-2 ring-red-400 hover:scale-105 cursor-pointer">
              <ShoppingBag className="h-5 w-5" /> Order Now
            </button></Link>
    </section>
      
  );
};

export default HomeBannerSection;