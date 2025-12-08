import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import deal1Img from "../assets/images/deals/d1.webp";
import deal2Img from "../assets/images/deals/d5.webp";
import deal3Img from '../assets/images/deals/d6.webp';
import deal4Img from "../assets/images/deals/e2.webp";
import deal5Img from '../assets/images/deals/e4.webp';
import deal6Img from '../assets/images/deals/e7.webp';

const deals = [
  {
    title: 'Special Small Pizza Combo',
    description: 'A perfect combo for one person.',
    items: ['1 Special Small Pizza', 'Fries', '500ml Drink'],
    price: 'RS: 670/-',
    img: deal1Img,
  },
  {
    title: 'Regular Medium Pizza Combo',
    description: 'Ideal for small gatherings.',
    items: ['2 Regular Medium Pizza', '1 Ltr Drink'],
    price: 'RS: 1860/-',
    img: deal2Img,
  },
  {
    title: 'Special Medium Pizza Combo',
    description: 'Double the fun with special toppings.',
    items: ['2 Special Medium Pizza', '1 Ltr Drink'],
    price: 'RS: 1999/-',
    img: deal3Img,
  },
  {
    title: 'Wow Deal',
    description: 'A family feast for everyone.',
    items: ['1 Special Large Pizza', '10 Hot Wings', '10 Nuggets', 'Lrg Fries', '1.5 Ltr Drink'],
    price: 'RS: 2799/-',
    img: deal4Img,
  },
  {
    title: 'Zinger Combo',
    description: 'Spicy and crunchy delight.',
    items: ['Zinger Burger', 'Fries', 'Drink'],
    price: 'RS: 530/-',
    img: deal5Img,
  },
  {
    title: 'Kiddy Meal 1',
    description: 'Fun meal for the little ones.',
    items: ['5 Pcs Hot Wings', 'Fries', 'Half Ltr Drink'],
    price: 'RS: 430/-',
    img: deal6Img,
  },
];

const OurBestDeals = () => {
  // const sendToWhatsApp = (deal) => {
  //   const message = `Hello! I want to order the following deal:\n\n${deal.title}\nItems:\n${deal.items.join(
  //     '\n'
  //   )}\nPrice: ${deal.price}`;
  //   const url = `https://wa.me/923333110002?text=${encodeURIComponent(message)}`;
  //   window.open(url, '_blank');
  // };

  return (
<section className="w-full bg-linear-to-br from-black via-neutral-900 to-black py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
      Pizza Italo Deals
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {deals.map((deal, idx) => (
        <div
          key={idx}
          className="bg-linear-to-br from-neutral-900 via-black to-neutral-900 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="border-t-8 border-yellow-400">
            <img src={deal.img} alt={deal.title} className="w-full h-48 object-cover" />
          </div>
          <div className="p-6 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
            <p className="text-gray-300 mb-4">{deal.description}</p>
            <ul className="text-gray-200 mb-4 list-disc list-inside">
              {deal.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-yellow-400 font-semibold mb-4 text-lg">{deal.price}</p>
            {/* <button
              onClick={() => sendToWhatsApp(deal)}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-white shadow-lg transition duration-200 cursor-pointer"
            >
              ORDER NOW
            </button> */}
          </div>
        </div>
      ))}
    </div>
  </div>
   <div className='flex justify-center items-center mt-15'>
    <Link to={'/menu'} className='border- border-amber-400 text-black bg-amber-400 rounded-md px-5 py-2 hover:bg-amber-500  font-semibold'>Explore Deals</Link>
   </div>
</section>

  );
};

export default OurBestDeals;
