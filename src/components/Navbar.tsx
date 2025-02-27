import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center"
            >
              <Shield className="h-8 w-8 text-dark-green" />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-dark-green' : 'text-white'}`}>
                Trezor Wallet
              </span>
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-dark-green' : 'text-white hover:text-gray-200'} transition-colors`}>Features</a>
            <a href="#security" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-dark-green' : 'text-white hover:text-gray-200'} transition-colors`}>Security</a>
            <a href="#models" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-dark-green' : 'text-white hover:text-gray-200'} transition-colors`}>Models</a>
            <a href="#faq" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-dark-green' : 'text-white hover:text-gray-200'} transition-colors`}>FAQ</a>
            <a href="#contact" className="bg-dark-green text-white hover:bg-light-green transition-colors px-4 py-2 rounded-full font-medium">
              Get Started
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-dark-green font-medium">Features</a>
            <a href="#security" className="block px-3 py-2 text-gray-700 hover:text-dark-green font-medium">Security</a>
            <a href="#models" className="block px-3 py-2 text-gray-700 hover:text-dark-green font-medium">Models</a>
            <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-dark-green font-medium">FAQ</a>
            <a href="#contact" className="block px-3 py-2 bg-dark-green text-white hover:bg-light-green transition-colors rounded-md font-medium">
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;