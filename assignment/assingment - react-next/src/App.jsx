import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Mortgage from './pages/Mortgage';
import Start from './pages/Start';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;