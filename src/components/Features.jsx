import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '',
      titleKey: 'feat_refund_title',
      descKey: 'feat_refund_desc',
      badge: null,
    },
    {
      icon: '',
      titleKey: 'feat_book_title',
      descKey: 'feat_book_desc',
      badge: null,
    },
    {
      icon: '',
      titleKey: 'feat_deal_title',
      descKey: 'feat_deal_desc',
      badge: 'hot_deal',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="feature-icon-wrap">
              <span className="feature-icon">{feat.icon}</span>
              {feat.badge && (
                <span className="feature-badge">{t(feat.badge)}</span>
              )}
            </div>
            <h3 className="feature-title">{t(feat.titleKey)}</h3>
            <p className="feature-desc">{t(feat.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
