import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import { initGA, logPageView } from './analytics';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="App">
      <Header />
      <WhyUs />
      <Services />
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add more routes here */}
    </Routes>
  </Router>
);

export default AppWithRouter;
