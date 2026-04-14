import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { testimonials } from '../mockData';

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'star-filled' : 'star-empty'}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section">
      <motion.div
        className="section-header centered"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{t('testimonials_title')}</h2>
        <p className="section-sub">{t('testimonials_sub')}</p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <Stars count={item.rating} />
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
              <span className="testimonial-name">{item.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
