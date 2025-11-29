import React from 'react';
import { Menu, CheckSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Step 1',
    heading: 'Open Menu',
    desc: 'Browse our menu and choose your favorite dishes.',
    icon: Menu,
    link: '/menu',
  },
  {
    title: 'Step 2',
    heading: 'Select Items',
    desc: 'Select all items you want to order.',
    icon: CheckSquare,
    link: '/order',
  },
  {
    title: 'Step 3',
    heading: 'Confirm Order',
    desc: 'Click order and send your selection via WhatsApp.',
    icon: Send,
    link: 'https://wa.me/923333110002',
  },
];

const HomeGuideSection = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-extrabold text-amber-400 mb-12 text-center">How to Order</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isExternal = step.link.startsWith('http');
            return (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-amber-400 rounded-full">
                  <Icon className="h-12 w-12 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <h4 className="text-xl font-extrabold text-white mb-2">{step.heading}</h4>
                <p className="text-white text-sm mb-6">{step.desc}</p>
                {isExternal ? (
                  <a href={step.link} target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-semibold shadow-lg transition duration-200 flex items-center gap-2">
                    Proceed Now <span className="animate-pulse">→</span>
                  </a>
                ) : (
                  <Link to={step.link} className="mt-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-semibold shadow-lg transition duration-200 flex items-center gap-2">
                    Proceed Now <span className="animate-pulse">→</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeGuideSection;