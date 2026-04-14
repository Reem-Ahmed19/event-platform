import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../mockData';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(prev => (prev === idx ? null : idx));

  return (
    <section className="faq-section">
      <motion.div
        className="section-header centered"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          {t('faq_title')}{' '}
          <span className="hero-highlight">{t('faq_highlight')}</span>
        </h2>
        <p className="section-sub">{t('faq_sub')}</p>
      </motion.div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className={`faq-item ${openIndex === idx ? 'faq-open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            viewport={{ once: true }}
          >
            <button className="faq-question" onClick={() => toggle(idx)}>
              <span>{faq.q}</span>
              <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
