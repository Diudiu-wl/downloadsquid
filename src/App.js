
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Windows from './pages/Windows';
import Mac from './pages/Mac';
import History from './pages/History';
import "./i18n";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Windows />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
