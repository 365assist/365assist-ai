import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">365assist.ai</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/aitraining">AI Training</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
