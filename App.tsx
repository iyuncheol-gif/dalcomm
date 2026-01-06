
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import WhySection from './components/WhySection';
import Curriculum from './components/Curriculum';
import LearningSystem from './components/LearningSystem';
import Reviews from './components/Reviews';
import Teachers from './components/Teachers';
import Classes from './components/Classes';
import Consultation from './components/Consultation';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">
        <Hero />
        <Problems />
        <WhySection />
        <Curriculum />
        <LearningSystem />
        <Reviews />
        <Teachers />
        <Classes />
        <Consultation />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default App;
