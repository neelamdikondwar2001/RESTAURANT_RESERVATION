import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Success } from './pages/Success';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Success' element={<Success/>} />
        <Route path='*' element={<NotFound />} />  // Corrected path for "Not Found"
      </Routes>
      <Toaster />
    </Router>
  );
}

// Use default export
export default App;



