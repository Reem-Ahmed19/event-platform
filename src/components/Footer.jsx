import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <>
      {/* Newsletter */}
      <section className="newsletter-section">
        <motion.div
          className="newsletter-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="newsletter-title">{t('newsletter_title')}</h2>
          <p className="newsletter-sub">{t('newsletter_sub')}</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder={t('newsletter_placeholder')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn">
              {t('newsletter_btn')}
            </button>
          </form>
          {subscribed && (
            <p className="newsletter-success">🎉 You're subscribed! Watch your inbox.</p>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-italic"></span>venjo
          </div>

          <nav className="footer-links">
            <a href="/">{t('footer_links')}</a>
            <a href="#contact">{t('footer_contact')}</a>
            <a href="#about">{t('footer_about')}</a>
            <a href="#privacy">{t('footer_privacy')}</a>
          </nav>

          <div className="footer-socials">
            {['f', 'in', '𝕏', '▶', '●'].map((icon, i) => (
              <a key={i} href="#" className="social-icon">{icon}</a>
            ))}
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Evenjo. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
