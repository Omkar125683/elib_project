import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/mortgage">Mortgage Calculator</Link>
      <Link to="/start">Start</Link>
    </nav>
  );
}