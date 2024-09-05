import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing individual components for different platforms
import Home from './pages/Home';
import Facebook from './pages/Facebook';
import Twitter from './pages/Twitter';
import Instagram from './pages/Instagram';
import Navbar from './components/Navbar';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  return (
    <Router>
      <div>
       <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/instagram" element={<Instagram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
