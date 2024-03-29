import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <AppRoutes />
        <Footer />
      </>
    </Router>
  );
}

export default App;
