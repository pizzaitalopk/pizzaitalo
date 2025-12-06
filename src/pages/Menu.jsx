import React from "react";
import Seo from "../components/Seo";
import MenuBanner from "../components/MenuBanner";
import MenuOtherItemsSection from "../components/MenuOtherItemsSection";
import MenuPageDealsSection from "../components/MenuPageDealsSection";

const Menu = () => {
  return (
    <>
      {/* Page-level SEO */}
      <Seo
        title="Menu | Pizza Italo"
        description="Check out our delicious Pizza Italo menu including pizzas, burgers, and fast food items made fresh daily."
        keywords="pizza menu, italian pizza, burgers, fast food, Pizza Italo , bahawalnagar , Pizza Italo in bahawalnagar , menu explore"
        url="https://pizza-italo.vercel.app/menu"
        image="/logo.png"  // OG image
      />

      {/* Page Content */}
      <div className="bg-gray-800 min-h-screen">
        <MenuBanner />
        <MenuPageDealsSection />
        <MenuOtherItemsSection />
      </div>
    </>
  );
};

export default Menu;
