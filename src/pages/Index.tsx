
import React from 'react';
import Header from '@/components/Layout/Header';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import TopDealers from '@/components/TopDealers';
import TopServiceCenters from '@/components/TopServiceCenters';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import DownloadApp from '@/components/DownloadApp';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
        <TopDealers />
        <TopServiceCenters />
        <ServicesSection />
        <ProductsSection />
        <DownloadApp />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
