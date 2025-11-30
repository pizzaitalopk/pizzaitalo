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
    <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="border-t-8 border-yellow-400">
        <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6 flex flex-col items-start">
        <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
        <p className="text-gray-300 mb-4">{deal.description || ""}</p>
        {deal.items && (
          <ul className="text-gray-200 mb-4 list-disc list-inside">
            {deal.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        <p className="text-yellow-400 font-semibold mb-4 text-lg">RS: {deal.price}/-</p>
        <button
          onClick={() => sendToWhatsApp(deal)}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-white shadow-lg transition duration-200 cursor-pointer"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-br from-black via-neutral-900 to-black py-20">
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
