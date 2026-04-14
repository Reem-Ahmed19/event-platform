import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EventSection = ({ titleKey, events, filterTags, sectionId }) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? events
      : events.filter(e =>
          e.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section className="event-section" id={sectionId}>
      <div className="section-header">
        <h2 className="section-title">{t(titleKey)}</h2>
        
      </div>

      {/* Filter Pills */}
      {filterTags && (
        <div className="filter-pills">
          <button
            className={`filter-pill ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          {filterTags.map(tag => (
            <button
              key={tag}
              className={`filter-pill ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Cards Grid */}
      <motion.div
        className="events-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filtered.map(event => (
          <motion.div key={event.id} variants={itemVariants}>
           
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EventSection;
