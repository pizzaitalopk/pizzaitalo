import React from 'react';

const HomeBannerSection = () => {
  return (
    <section className="w-full h-[50vh] flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 mb-4">
          ORIGINAL RECIPE SINCE 2005
        </h1>
        <p className="text-white text-xl md:text-2xl">
          Experience the authentic taste of our signature pizzas.
        </p>
      </div>
    </section>
  );
};

export default HomeBannerSection;