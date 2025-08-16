import { useState, useEffect } from 'react';
import logo from '../assets/logo-1.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-b from-gray-900 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 md:h-12 md:w-12 object-contain" 
          />
          <span className="ml-2 text-xl font-bold text-white">Jumppace</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-medium text-gray-300 hover:text-blue-400 transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg py-4 px-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-medium text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <button className="w-full mb-3 font-medium text-gray-300 py-2 hover:text-blue-400 transition-colors">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}