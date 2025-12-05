import React from "react";
import { deals, extraDeals } from "../assets/menuData"; // adjust path

const MenuPageDealsSection = () => {
  const sendToWhatsApp = (deal) => {
    const message = `Hello! I want to order the following deal:\n\n${deal.title}\nItems:\n${deal.items?.join(
      "\n"
    ) || "-"}\nPrice: RS: ${deal.price}/-`;
    const url = `https://wa.me/923333110002?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

const DealCard = ({ deal }) => (
  <div className="bg-black rounded-xl shadow-xl overflow-hidden border border-neutral-800 hover:scale-105 transition-transform duration-300">

    {/* Top Image Section */}
    <div className="border-t-8 border-yellow-400 bg-white">
      <img
        src={deal.img}
        alt={deal.title}
        className="w-full h-56 object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="p-6">

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-1">
        {deal.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-3">
        {deal.description}
      </p>

      {/* Items List */}
      {deal.items && (
        <ul className="text-gray-200 text-sm mb-4 space-y-1">
          {deal.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-yellow-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      <p className="text-yellow-400 font-bold text-xl mb-5">
        {deal.price}
      </p>

      {/* Button */}
      <button
        onClick={() => sendToWhatsApp(deal)}
        className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold text-lg shadow-md"
      >
        ORDER NOW
      </button>
    </div>
  </div>
);


  return (
    <section className="w-full bg-linear-to-br from-black via-neutral-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Deals */}
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          Pizza Italo Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, idx) => (
            <DealCard key={idx} deal={deal} />
          ))}
        </div>

        {/* Extra Deals */}
        <h2 className="text-4xl font-extrabold text-yellow-400 my-12 text-center">
          Extra Deals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraDeals.map((deal, idx) => (
            <DealCard key={idx} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPageDealsSection;
