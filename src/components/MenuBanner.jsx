import React from "react";

const MenuBanner = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 px-6 rounded-lg overflow-hidden shadow-lg">
      {/* Overlay gradient for style */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-yellow-500">
          OUR MENU
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-1">
          Explore a wide range of delicious <span className="text-yellow-300 font-bold">Pizzas</span>, <span className="text-yellow-300 font-bold">Burgers</span>, <span className="text-yellow-300 font-bold">Cakes</span>, and more. 
          Choose your favorites and enjoy the ultimate dining experience.
        </p>

      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default MenuBanner;
