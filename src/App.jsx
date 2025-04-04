// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import ChartPage from "./pages/ChartPage/ChartPage.jsx";
import WatchListPage from "./pages/WatchListPage/WatchListPage.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char" element={<ChartPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path='*' element={<h2>Whoops Nothing Here</h2>} />
      </Routes>
      </Router>
  );
};

export default App;
