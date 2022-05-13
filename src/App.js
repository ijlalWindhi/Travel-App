import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './page/login/index';
import Register from './page/register/index';
import LandingPage from './page/landing page/LandingPage';
import Transportation from './page/transportation/Transportation';
import Pemesanan from './page/pemesanan'

// petugas
import LoginPetugas from './page/login petugas/index';
import Dashboard from './page/dashboard/index';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" excat element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/transportation" element={<Transportation/>} />
        <Route path="/pemesanan/:id" element={<Pemesanan/>} />

        {/* petugas */}
        <Route path="/loginPetugas" element={<LoginPetugas/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

    </>
  );
}

export default App;
