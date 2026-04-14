import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Import your global CSS (if Claude gave you an index.css or Global.css file)
// import './index.css'; 

// 2. Import your translation configuration so languages work
import './i18n/i18n'; 

// 3. Import your main App component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);