import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

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
