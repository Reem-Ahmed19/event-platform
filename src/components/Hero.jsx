import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const Hero = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('concerts');
  const [search, setSearch] = useState({ what: '', where: '', when: '' });

  const tabs = [
    { key: 'concerts', label: t('hero_tab_concerts'), icon: '🎵' },
    { key: 'shows', label: t('hero_tab_shows'), icon: '🎭' },
    { key: 'sports', label: t('hero_tab_sports'), icon: '⚽' },
    { key: 'festivals', label: t('hero_tab_festivals'), icon: '🎪' },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Background image overlay */}
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Main Headline */}
        <motion.div
          className="hero-headline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <h1>
            {t('hero_headline_1')}{' '}
            <span className="hero-highlight">{t('hero_headline_2')}</span>
          </h1>
          <h1>{t('hero_headline_3')}</h1>
        </motion.div>

        <motion.p
          className="hero-sub"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {t('hero_sub')}
        </motion.p>

        {/* Search Card */}
        <motion.div
          className="hero-search-card"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          {/* Tabs */}
          <div className="hero-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`hero-tab ${activeTab === tab.key ? 'hero-tab-active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="hero-search-row">
            <div className="hero-search-field">
              <span className="field-icon">🔍</span>
              <input
                type="text"
                placeholder={t('hero_search_what')}
                value={search.what}
                onChange={e => setSearch({ ...search, what: e.target.value })}
                className="search-input"
              />
            </div>
            <div className="hero-search-divider" />
            <div className="hero-search-field">
              <span className="field-icon">📍</span>
              <input
                type="text"
                placeholder={t('hero_search_where')}
                value={search.where}
                onChange={e => setSearch({ ...search, where: e.target.value })}
                className="search-input"
              />
            </div>
            <div className="hero-search-divider" />
            <div className="hero-search-field">
              <span className="field-icon">📅</span>
              <input
                type="date"
                value={search.when}
                onChange={e => setSearch({ ...search, when: e.target.value })}
                className="search-input"
              />
            </div>
            <button className="search-btn">{t('hero_search_btn')}</button>
          </div>

          {/* Badges */}
          <div className="hero-badges">
            <span className="hero-badge">📅 {t('hero_badge_book')}</span>
            <span className="hero-badge">🔄 {t('hero_badge_refund')}</span>
            <span className="hero-badge">💡 {t('hero_badge_deals')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
