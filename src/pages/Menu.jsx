import MenuBanner from "../components/MenuBanner";
import MenuOtherItemsSection from "../components/MenuOtherItemsSection";
import MenuPageDealsSection from "../components/MenuPageDealsSection";

const Menu = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <MenuBanner />
      <MenuPageDealsSection />
      <MenuOtherItemsSection/>
    </div>
  );
};

export default Menu;
