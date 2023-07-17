import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogPost from './pages/BlogPost';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/post/:id" element={<BlogPost />} />
      {/* Add as many routes as you need */}
    </Routes>
  );
}

export default RoutesConfig;
