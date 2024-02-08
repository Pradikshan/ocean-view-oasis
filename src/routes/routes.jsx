import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FAQPage from '../pages/FAQPage';
import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
import FloorPlanPage from '../pages/FloorPlanPage';
import PricingPage from '../pages/PricingPage';
import AboutUsPage from '../pages/AboutUsPage';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/floor_plan' element={<FloorPlanPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/contact_us' element={<ContactUsPage />} />
        <Route path='/about' element={<AboutUsPage />} />
    </Routes>
  );
};
