import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const categories = [
  { key: 'concerts', labelKey: 'section_concert', icon: '🎵', color: '#c855f7', count: 48 },
  { key: 'shows',    labelKey: 'section_show',    icon: '🎭', color: '#e040b5', count: 32 },
  { key: 'sports',   labelKey: 'section_sport',   icon: '⚽', color: '#5b8af7', count: 25 },
  { key: 'festivals',labelKey: 'section_festival',icon: '🎪', color: '#f7a255', count: 19 },
];

const EventCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="categories-section">
      <motion.div
        className="section-header centered"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Browse by <span className="hero-highlight">Category</span>
        </h2>
        <p className="section-sub">
          Explore hundreds of events across four major categories.
        </p>
      </motion.div>

      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <motion.a
            href={`#${cat.key}`}
            key={cat.key}
            className="category-card"
            style={{ '--cat-color': cat.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <div className="category-icon-wrap">
              <span className="category-icon">{cat.icon}</span>
            </div>
            <h3 className="category-name">{t(cat.labelKey)}</h3>
            <p className="category-count">{cat.count} events</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
