import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './page/login/index';
import Register from './page/register/index';
import LandingPage from './page/landing page/LandingPage';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" excat element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

    </>
  );
}

export default App;
