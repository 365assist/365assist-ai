import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Support from './pages/Support';
import AITraining from './pages/AITraining';
import Tutorials from './pages/Tutorials';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/aitraining" element={<AITraining />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
