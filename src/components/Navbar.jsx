import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isArabic = i18n.language === 'ar';

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toggle language and document direction
  const toggleLanguage = () => {
    const nextLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  const navLinks = [
    { key: 'nav_home', href: '/' },
    { key: 'nav_shows', href: '#shows' },
    { key: 'nav_concerts', href: '#concerts' },
    { key: 'nav_sports', href: '#sports' },
    { key: 'nav_festivals', href: '#festivals' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-italic"></span>venjo
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`navbar-links ${isArabic ? 'rtl-flex' : ''}`}>
          {navLinks.map(link => (
            <li key={link.key}>
              <a href={link.href} className="nav-link">
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="navbar-controls">
          {/* Language Toggle */}
          <button className="lang-toggle" onClick={toggleLanguage}>
            <span className="lang-icon"></span>
            <span className="lang-label">{isArabic ? 'EN' : 'عر'}</span>
          </button>

          {/* Sign In */}
          <Link to="/signin" className="btn-signin">
            {t('nav_signin')}
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <button className="lang-toggle mobile-lang" onClick={toggleLanguage}>
             {isArabic ? 'English' : 'العربية'}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
