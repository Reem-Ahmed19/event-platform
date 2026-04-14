import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { topSingers } from '../mockData';

const TopSingers = () => {
  const { t } = useTranslation();

  return (
    <section className="top-singers-section">
      <div className="section-header centered">
        <h2 className="section-title">{t('section_top_singers')}</h2>
        <p className="section-sub">{t('section_top_singers_sub')}</p>
      </div>

      <motion.div
        className="singers-scroll-row"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {topSingers.map((singer, idx) => (
          <motion.div
            key={singer.id}
            className="singer-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="singer-avatar-wrap">
              <img src={singer.image} alt={singer.name} className="singer-avatar" />
              <div className="singer-glow" />
            </div>
            <p className="singer-name">{singer.name}</p>
            <p className="singer-loc">{singer.location}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopSingers;
