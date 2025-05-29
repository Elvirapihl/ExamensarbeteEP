import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/login" element={<Login onLogin={() => window.location.href = "/app"} />} />
      <Route path="/register" element={<Register onRegister={() => window.location.href = "/app"} />} />
      <Route path="/app" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
