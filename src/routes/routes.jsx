import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FAQ from '../pages/FAQ';
import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
import FloorPlanPage from '../pages/FloorPlanPage';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/floor_plan' element={<FloorPlanPage />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact_us' element={<ContactUsPage />} />
    </Routes>
  );
};
