import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Declaration from './pages/Declaration';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
