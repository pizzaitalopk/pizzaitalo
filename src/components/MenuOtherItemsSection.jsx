import React from "react";
import { otherMenuItems } from "../assets/menuData"; // path to your full data

const MenuOtherItemsSection = () => {
  // WhatsApp order function
  // const sendToWhatsApp = (item) => {
  //   const message = `Hello! I want to order the following item:\n\n${item.title}\nPrice: RS: ${item.price}/-`;
  //   const url = `https://wa.me/923333110002?text=${encodeURIComponent(message)}`;
  //   window.open(url, "_blank");
  // };

  // Reusable Card for each menu item
  const ItemCard = ({ item }) => (
    <div className="bg-linear-to-br from-neutral-900 via-black to-neutral-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-yellow-400 font-semibold mb-4">RS: {item.price}/-</p>
        {/* <button
          onClick={() => sendToWhatsApp(item)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold shadow transition duration-200"
        >
          ORDER NOW
        </button> */}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {otherMenuItems.map((segment, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">{segment.segment}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {segment.items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuOtherItemsSection;
