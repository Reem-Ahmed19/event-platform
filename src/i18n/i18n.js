import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      nav_home: 'Home',
      nav_shows: 'Shows',
      nav_concerts: 'Concerts',
      nav_sports: 'Sports',
      nav_festivals: 'Festivals',
      nav_signin: 'Sign In',

      // Hero
      hero_headline_1: 'What',
      hero_headline_2: 'Concert',
      hero_headline_3: 'would you like to go to?',
      hero_sub: 'More than 100 concerts in different countries are now available to you.',
      hero_tab_concerts: 'Concerts',
      hero_tab_shows: 'Shows',
      hero_tab_sports: 'Sports',
      hero_tab_festivals: 'Festivals',
      hero_search_what: 'Event Type',
      hero_search_where: 'Location',
      hero_search_when: 'When',
      hero_search_btn: 'Search',
      hero_badge_book: 'Book Anytime',
      hero_badge_refund: 'Refundable Tickets',
      hero_badge_deals: 'Smart Deals',

      // Sections
      section_concert: 'Concert',
      section_show: 'Show',
      section_sport: 'Sport',
      section_festival: 'Festivals',
      section_top_singers: 'Top Singers',
      section_top_singers_sub: 'Find the singers you\'re looking for quickly. You can see more.',
      see_all: 'See all',
      from_price: 'from',

      // Features
      feat_refund_title: 'Refundable Tickets',
      feat_refund_desc: 'You can pay a ticket in 2 partners throughout a fixed period of time. Start travelling for free.',
      feat_book_title: 'Book Anytime!',
      feat_book_desc: 'You can always schedule a fixed period of time. Start travelling for free.',
      feat_deal_title: 'Smart Deals',
      feat_deal_desc: 'You can always schedule a ticket throughout a fixed period of time. Start travelling for free.',
      hot_deal: 'HOT DEAL',

      // Booking
      booking_title: 'Book Your Tickets',
      booking_subtitle: 'Fill in your details to reserve your spot at the event.',
      booking_name: 'Full Name',
      booking_email: 'Email Address',
      booking_tickets: 'Number of Tickets',
      booking_event: 'Select Event',
      booking_event_placeholder: '-- Choose an Event --',
      booking_submit: 'Book Now',
      booking_success: '🎉 Booking confirmed! Check your email for details.',
      booking_error_name: 'Name is required.',
      booking_error_email: 'A valid email address is required.',

      // Testimonials
      testimonials_title: 'Loved by Thousands',
      testimonials_sub: 'Smooth, every little thing is easy and I love our happy users.',

      // FAQ
      faq_title: 'Frequently Asked',
      faq_highlight: 'Questions',
      faq_sub: 'Explore the most common questions about our events, all-inclusive, and welcome to our journey to find events for you.',

      // Newsletter
      newsletter_title: 'Stay in the Loop',
      newsletter_sub: 'Subscribe to get the latest events and exclusive deals delivered to your inbox.',
      newsletter_placeholder: 'Enter your email',
      newsletter_btn: 'Subscribe',

      // Footer
      footer_links: 'Home',
      footer_contact: 'Contact us',
      footer_about: 'About Us',
      footer_privacy: 'Privacy Policy',
    },
  },
  ar: {
    translation: {
      nav_home: 'الرئيسية',
      nav_shows: 'العروض',
      nav_concerts: 'الحفلات',
      nav_sports: 'الرياضة',
      nav_festivals: 'المهرجانات',
      nav_signin: 'تسجيل الدخول',

      hero_headline_1: 'ما هي',
      hero_headline_2: 'الحفلة',
      hero_headline_3: 'التي تريد الذهاب إليها؟',
      hero_sub: 'أكثر من 100 حفلة في دول مختلفة متاحة لك الآن.',
      hero_tab_concerts: 'حفلات',
      hero_tab_shows: 'عروض',
      hero_tab_sports: 'رياضة',
      hero_tab_festivals: 'مهرجانات',
      hero_search_what: 'نوع الفعالية',
      hero_search_where: 'الموقع',
      hero_search_when: 'الموعد',
      hero_search_btn: 'بحث',
      hero_badge_book: 'احجز في أي وقت',
      hero_badge_refund: 'تذاكر قابلة للاسترداد',
      hero_badge_deals: 'عروض ذكية',

      section_concert: 'حفلات موسيقية',
      section_show: 'عروض',
      section_sport: 'رياضة',
      section_festival: 'مهرجانات',
      section_top_singers: 'أبرز المغنين',
      section_top_singers_sub: 'ابحث عن المغنين الذين تريدهم بسرعة. يمكنك رؤية المزيد.',
      see_all: 'عرض الكل',
      from_price: 'من',

      feat_refund_title: 'تذاكر قابلة للاسترداد',
      feat_refund_desc: 'يمكنك دفع تذكرة على دفعتين خلال فترة زمنية محددة. ابدأ السفر مجانًا.',
      feat_book_title: 'احجز في أي وقت!',
      feat_book_desc: 'يمكنك دائمًا جدولة تذكرة طوال فترة زمنية محددة. ابدأ السفر مجانًا.',
      feat_deal_title: 'عروض ذكية',
      feat_deal_desc: 'يمكنك دائمًا جدولة تذكرة بأفضل سعر طوال فترة زمنية محددة.',
      hot_deal: 'عرض ساخن',

      booking_title: 'احجز تذاكرك',
      booking_subtitle: 'أدخل بياناتك لحجز مكانك في الفعالية.',
      booking_name: 'الاسم الكامل',
      booking_email: 'البريد الإلكتروني',
      booking_tickets: 'عدد التذاكر',
      booking_event: 'اختر الفعالية',
      booking_event_placeholder: '-- اختر فعالية --',
      booking_submit: 'احجز الآن',
      booking_success: '🎉 تم تأكيد الحجز! تحقق من بريدك الإلكتروني للتفاصيل.',
      booking_error_name: 'الاسم مطلوب.',
      booking_error_email: 'البريد الإلكتروني غير صالح.',

      testimonials_title: 'محبوب من الآلاف',
      testimonials_sub: 'سلس، كل شيء سهل ونحب مستخدمينا السعداء.',

      faq_title: 'الأسئلة',
      faq_highlight: 'الشائعة',
      faq_sub: 'استكشف الأسئلة الأكثر شيوعاً حول فعالياتنا.',

      newsletter_title: 'ابقَ على اطلاع',
      newsletter_sub: 'اشترك للحصول على أحدث الفعاليات والعروض الحصرية في بريدك.',
      newsletter_placeholder: 'أدخل بريدك الإلكتروني',
      newsletter_btn: 'اشترك',

      footer_links: 'الرئيسية',
      footer_contact: 'تواصل معنا',
      footer_about: 'من نحن',
      footer_privacy: 'سياسة الخصوصية',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
