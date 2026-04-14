import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventCard = ({ event, badge }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="event-card"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <div className="event-card-img-wrap">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-img"
          loading="lazy"
        />
        {badge && <span className="event-badge event-badge-live">● LIVE</span>}
        <span className="event-badge event-badge-category">{event.category}</span>
      </div>
      <div className="event-card-body">
        <h4 className="event-card-title">{event.title}</h4>
        <div className="event-card-meta">
          <span> {event.date}</span>
          <span> {event.location}</span>
        </div>
        <div className="event-card-meta">
          <span> {event.persons}</span>
          <span className="event-card-price">
            {t('from_price')} ${event.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
