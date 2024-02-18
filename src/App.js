import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Resources from './pages/Resources';
import UpcomingEvents from './components/Upcomingevents';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<UpcomingEvents />} />
      </Routes>
    </Router>
  );
};

export default App;
