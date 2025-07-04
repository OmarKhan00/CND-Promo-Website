import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './cnd-app/about-us';
import ContactUs from './cnd-app/contact-us';
import ForDrivers from './cnd-app/for-drivers';
import ForHosts from './cnd-app/for-hosts';
import Home from './cnd-app/home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/for-drivers" element={<ForDrivers />} />
          <Route path="/for-hosts" element={<ForHosts />} />
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
