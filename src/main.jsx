import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioPage } from './pages';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  </React.StrictMode>,
);
