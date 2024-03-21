import React from 'react';
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Patrners from './pages/Partners';
import AdmDashboard from './pages/AdmDashboard';
import Coach from './pages/Coach';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/partners' element={<Patrners />} />
        <Route path='/coach' element={<Coach />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
