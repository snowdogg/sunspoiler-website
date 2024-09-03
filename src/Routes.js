import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/post/:id" element={<BlogPost />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      {/* Add as many routes as you need */}
    </Routes>
  );
}

export default RoutesConfig;
