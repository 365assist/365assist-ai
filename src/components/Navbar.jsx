import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-300">
          365assist.ai
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/services" className="hover:text-blue-300">Services</Link>
          <Link to="/aitraining" className="hover:text-blue-300">AI Training</Link>
          <Link to="/support" className="hover:text-blue-300">Support</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
