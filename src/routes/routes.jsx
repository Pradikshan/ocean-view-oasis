import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FAQ from '../pages/FAQ';
import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact_us' element={<ContactUsPage />} />
    </Routes>
  );
};
