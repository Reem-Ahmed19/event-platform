import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { allEventsForDropdown } from '../mockData';

const initialForm = {
  name: '',
  email: '',
  tickets: 1,
  eventId: '',
};

const BookingSection = () => {
  const { t } = useTranslation();

  // ── Single useState object for all form fields ──────────────────────────
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Generic change handler — updates only the field that changed
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear individual field error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // ── Validation logic ────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = t('booking_error_name');
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = t('booking_error_email');
    }
    return newErrors;
  };

  // ── Submit handler ──────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      // Validation failed — show errors, do NOT submit
      setErrors(validationErrors);
      return;
    }

    // Validation passed — clear form and show success
    setFormData(initialForm);
    setErrors({});
    setSubmitted(true);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-inner">
        {/* Left — Text */}
        <motion.div
          className="booking-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="booking-eyebrow">Reserve Now</span>
          <h2 className="booking-title">{t('booking_title')}</h2>
          <p className="booking-sub">{t('booking_subtitle')}</p>

          <ul className="booking-perks">
            <li>Instant ticket confirmation</li>
            <li> Secure payment processing</li>
            <li> Refundable up to 48 hours before</li>
            <li> Digital tickets to your email</li>
          </ul>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          className="booking-form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <form className="booking-form" onSubmit={handleSubmit} noValidate>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="booking-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {t('booking_success')}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                {t('booking_name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-text">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                {t('booking_email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            {/* Row: Tickets + Event */}
            <div className="form-row">
              {/* Number of Tickets */}
              <div className="form-group">
                <label className="form-label" htmlFor="tickets">
                  {t('booking_tickets')}
                </label>
                <input
                  id="tickets"
                  name="tickets"
                  type="number"
                  min="1"
                  max="20"
                  className="form-input"
                  value={formData.tickets}
                  onChange={handleChange}
                />
              </div>

              {/* Event Dropdown */}
              <div className="form-group">
                <label className="form-label" htmlFor="eventId">
                  {t('booking_event')}
                </label>
                <select
                  id="eventId"
                  name="eventId"
                  className="form-input form-select"
                  value={formData.eventId}
                  onChange={handleChange}
                >
                  <option value="">{t('booking_event_placeholder')}</option>
                  {allEventsForDropdown.map(ev => (
                    <option key={ev.id} value={ev.id}>
                      {ev.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="booking-submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('booking_submit')}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
