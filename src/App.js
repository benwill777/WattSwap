import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login'
import Testimonials from './Components/TestimonialSection.js'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
