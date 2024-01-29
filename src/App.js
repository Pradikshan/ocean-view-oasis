import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <AppRoutes />
      </>
    </Router>
  );
}

export default App;
