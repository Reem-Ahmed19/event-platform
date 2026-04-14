import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// A highlighted "Featured" event card — stands alone between sections
const FeaturedEvent = () => {
  const { t } = useTranslation();

  const featured = {
    title: 'Holwaze Music Festival',
    subtitle: 'The Biggest Multi-Stage Festival of the Year',
    date: 'October 31, 2025',
    location: 'Austin, TX',
    price: 843.65,
    persons: 800,
    description:
      'Three days of non-stop music across six stages featuring 60+ artists from around the globe. Camping, food village, and after-parties included.',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=500&fit=crop',
    tags: ['Music', 'Festival', 'Outdoor', 'Multi-day'],
  };

  return (
    <section className="featured-section">
      <div className="section-header" style={{ marginBottom: '24px' }}>
        <h2 className="section-title">
          Featured <span className="hero-highlight">Event</span>
        </h2>
        <a href="#" className="see-all-link">{t('see_all')}</a>
      </div>

      <motion.div
        className="featured-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Background image */}
        <div className="featured-img-wrap">
          <img src={featured.image} alt={featured.title} className="featured-img" />
          <div className="featured-img-overlay" />
        </div>

        {/* Content overlay */}
        <div className="featured-content">
          <div className="featured-tags">
            {featured.tags.map(tag => (
              <span key={tag} className="featured-tag">{tag}</span>
            ))}
          </div>

          <h3 className="featured-title">{featured.title}</h3>
          <p className="featured-subtitle">{featured.subtitle}</p>

          <div className="featured-meta">
            <span> {featured.date}</span>
            <span> {featured.location}</span>
            <span> {featured.persons.toLocaleString()} attending</span>
          </div>

          <p className="featured-desc">{featured.description}</p>

          <div className="featured-footer">
            <div>
              <span className="featured-price-label">{t('from_price')}</span>
              <span className="featured-price">${featured.price.toFixed(2)}</span>
            </div>
            <motion.a
              href="#booking"
              className="featured-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Now →
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedEvent;
