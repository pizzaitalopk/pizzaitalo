import React from 'react';
import Seo from '../components/Seo';
import HomeHeroSection from '../components/HomeHeroSection';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeGuideSection from '../components/HomeGuideSection';
import HomeBannerSection from '../components/HomeBannerSection';
import OurBestDeals from '../components/OurBestDeals';
import HomeGallerySection from '../components/HomeGallerySection';
import HomeTestimonialsSection from '../components/HomeTestimonialsSection';

const Home = () => {
  return (
    <>
      {/* Page-level SEO */}
      <Seo 
        title="Pizza Italo - The Taste You Love"
        description="Welcome to Pizza Italo — serving fresh, hot Italian pizza delivered fast. Explore our menu and order your favorite pizza online!"
        keywords="pizza italo, home, italian pizza, food delivery, online order , bahawalnagar , Pizza Italo in bahawalnagar"
        url="https://pizzaitalo.food/"
        image="/logo.png"   // OG image
      />

      {/* Page Components */}
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeGuideSection />
      <HomeBannerSection />
      <OurBestDeals />
      <HomeGallerySection />
      <HomeTestimonialsSection />
    </>
  );
}

export default Home;
