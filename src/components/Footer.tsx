import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Facebook, Instagram, Youtube, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-dark-green" />
              <span className="ml-2 text-xl font-bold text-dark-green">Trezor Wallet</span>
            </div>
            <p className="text-gray-600 mb-4">
              The original and most trusted <span className="text-dark-green font-medium">hardware wallet Trezor</span> for secure cryptocurrency storage.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://twitter.com/trezor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dark-green"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://facebook.com/trezor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dark-green"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://instagram.com/trezor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dark-green"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://youtube.com/trezor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dark-green"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Trezor Model T</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Trezor Model One</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Trezor Safe 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Accessories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Trezor Suite</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Blog</a></li>
              <li>
                <a 
                  href="https://bitcoin.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-dark-green flex items-center"
                >
                  Bitcoin <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ethereum.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-dark-green flex items-center"
                >
                  Ethereum <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-dark-green">Security</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">Have questions about <span className="text-dark-green font-medium">hardware wallet Trezor</span>?</p>
            <a 
              href="mailto:info@trezor.io" 
              className="flex items-center text-dark-green hover:text-light-green mb-4"
            >
              <Mail size={16} className="mr-2" />
              info@trezor.io
            </a>
            <a 
              href="#contact" 
              className="inline-block bg-dark-green text-white hover:bg-light-green transition-colors px-4 py-2 rounded-full font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Trezor. All rights reserved. <span className="text-dark-green font-medium">Hardware wallet Trezor</span> is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;