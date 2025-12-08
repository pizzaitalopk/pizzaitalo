import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-black via-neutral-900 to-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* --- About / Logo --- */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-extrabold text-yellow-400 mb-4">Pizza Italo</h2>
          <p className="text-gray-400 mb-4">
            Bahawalnagar’s most loved pizza restaurant. Delicious Pizzas, Burgers, and combos with original taste since 2005.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100063775075566" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-yellow-400 transition duration-200" />
            </a>
            <a href="https://www.instagram.com/pizzaitalosamnabad/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-yellow-400 transition duration-200" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-yellow-400 transition duration-200" />
            </a> */}
          </div>
        </div>

        {/* --- Contact Info --- */}
     <div className="flex flex-col space-y-4">
  <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>

  {/* Address */}
  <div className="flex items-start gap-3 hover:text-yellow-400 transition duration-200">
    <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
    <a
      href="https://maps.app.goo.gl/TGcW4CGYTQq6vwfR8"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Chishtian Rd, near Punjab Bank, Bahawalnagar
    </a>
  </div>

  {/* WhatsApp / Phone */}
  <div className="flex items-center gap-3 hover:text-yellow-400 transition duration-200">
    <Phone className="h-5 w-5 text-yellow-400" />
    <a
      href="https://wa.me/923253110002"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      03253110002 (WhatsApp)
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3 hover:text-yellow-400 transition duration-200">
    <Mail className="h-5 w-5 text-yellow-400" />
    <a
      href="mailto:info@pizzaitalo.site"
      className="hover:underline"
    >
     pizzaitalo.pk@gmail.com
    </a>
  </div>
</div>


        {/* --- Quick Links --- */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h3>
          <Link to="/" className="hover:text-yellow-400 mb-2 transition duration-200">Home</Link>
          <Link to="/menu" className="hover:text-yellow-400 mb-2 transition duration-200">Menu</Link>
          <Link to="/gallery" className="hover:text-yellow-400 mb-2 transition duration-200">Gallery</Link>
          <Link to="/order" className="hover:text-yellow-400 mb-2 transition duration-200">Order Now</Link>
        </div>

      </div>

      {/* --- Bottom Bar --- */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pizza Italo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
