import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FAQ from '../pages/FAQ';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact />
        <Route path='/faq' element={<FAQ />} />

      
    </Routes>
  );
};
