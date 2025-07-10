import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize AOS
if (typeof window !== 'undefined') {
  AOS.init({ once: true, duration: 700, offset: 60 });
}
