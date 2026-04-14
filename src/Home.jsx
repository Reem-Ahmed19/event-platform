import React from 'react';

import { concerts, shows, sports, festivals } from './mockData';
import BookingSection from './components/BookingSection';
import FAQ from './components/FAQ';
import EventCategories from './components/EventCategories';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import TopSingers from './components/TopSingers';
import FeaturedEvent from './components/FeaturedEvent';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />

      <EventCategories />

      <EventSection
        titleKey="section_concert"
        events={concerts}
        filterTags={['Pop', 'Rock', 'Hip Hop & R&B', 'Alternative', 'Classical', 'Opera', 'Country']}
        sectionId="concerts"
      />

      <EventSection
        titleKey="section_show"
        events={shows}
        filterTags={['Theatre', 'Comedy', 'Magic', 'Medium', 'Circus', 'Dance', 'Puppetry', 'Live Drama']}
        sectionId="shows"
      />

      <TopSingers />

      <FeaturedEvent />

      <EventSection
        titleKey="section_sport"
        events={sports}
        filterTags={['Football', 'Basketball', 'Hockey', 'Golf', 'Motorsport', 'Tennis', 'Rugby']}
        sectionId="sports"
      />

      <EventSection
        titleKey="section_festival"
        events={festivals}
        filterTags={['Music', 'Food & Drink', 'Cultural', 'Film & Cinema', 'Tech', 'Art']}
        sectionId="festivals"
      />

      <Features />

      <BookingSection />

      <Testimonials />

      <FAQ />

      <Footer />
    </main>
  );
};

export default Home;
