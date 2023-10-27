import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './Pages/Homepage';
import ExhibitionsRail from './Components/ExhibitionsRail';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/exhibitions" element={<ExhibitionsRail />} />
  <Route path="/detail/:id" element={<DetailPage />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;
