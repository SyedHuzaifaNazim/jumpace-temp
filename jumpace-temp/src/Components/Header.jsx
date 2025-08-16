import { useState } from 'react';
import logo from '../assets/logo-1.webp'; // Adjust the path as necessary

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className=" inline-block mr-2" />
        <div className="flex items-center">

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-medium text-gray-600 hover:text-blue-600">Sign In</button>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full mb-3 font-medium text-gray-600">Sign In</button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}