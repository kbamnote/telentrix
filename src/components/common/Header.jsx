import React from 'react';
import { Search } from 'lucide-react';
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../../assets/Screenshot 2025-03-28 105908.png'

const Header = () => {
  const menuItems = [
    'About Us', 
    'Our Solutions', 
    'Careers', 
    'Community First Initiatives', 
    'Resources', 
    'Contact Us'
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Left Side - Logos */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <img 
            src={logo}
            alt="Great Place to Work Certified 2024" 
            className="h-16 w-auto"
          />
         
        </div>
        
      </div>

      {/* Right Side - Navigation */}
      <div className="flex items-center space-x-6">
        <nav className="flex items-center space-x-6">
          <div className="bg-[#293b95] text-white px-4 py-2 rounded-full flex items-center">
            Home
          </div>
          {menuItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-700 flex items-center"
            >
              {item}
              <svg className="ml-1 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Search size={20} color="#293b95" className="cursor-pointer" />
          <div className="flex space-x-3">
            <Linkedin size={20} color="#293b95" className="cursor-pointer" />
            <Facebook size={20} color="#293b95" className="cursor-pointer" />
            <Twitter size={20} color="#293b95" className="cursor-pointer" />
            <Instagram size={20} color="#293b95" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;