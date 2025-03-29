import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/Screenshot 2025-03-28 105908.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({
    'About Us': false,
    'Our Solutions': false,
    'Careers': false,
    'Resources': false
  });

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleItem = (item) => {
    setExpandedItems({
      ...expandedItems,
      [item]: !expandedItems[item]
    });
  };

  const menuItems = [
    { name: 'About Us', hasDropdown: true },
    { name: 'Our Solutions', hasDropdown: true },
    { name: 'Careers', hasDropdown: true },
    { name: 'Community First Initiatives', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
    { name: 'Contact Us', hasDropdown: false }
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-sm z-40 relative">
        <div className="px-4 py-3 flex justify-between">
          {/* Logo Section */}
          <div className="">
            <img 
              src={logo} 
              alt="ARTECH Intelligence is Human" 
              className="h-20 w-auto hidden sm:block"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="bg-[#293b95] text-white px-4 py-2 rounded-full">
              Home
            </div>
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href="#" 
                className="text-gray-700 hover:text-[#293b95] flex items-center"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
              </a>
            ))}
          </nav>

          {/* Social Icons - Only on Desktop */}
          <div className="hidden lg:flex items-center space-x-4">

            
           
            <div className="flex space-x-3">

           
    {/* Search Icon */}
    <a href="#" className="text-[#293b95]">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.707 22.293l-6.364-6.364a9.5 9.5 0 1 0-1.414 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414zM10.5 18a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5z"/>
      </svg>
    </a>

              <a href="#" className="text-[#293b95]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-[#293b95]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-[#293b95]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-[#293b95]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center lg:hidden">
     
            <button 
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none z-50"
            >
              <Menu size={29} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay - Background Mask */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sliding Mobile/Tablet Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 bg-[#222222] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:w-1/2 w-full`}
      >
        {/* Search and Close Button */}
        <div className="flex bg-black justify-between items-center p-4 border-b border-[#333333]">
          <input type='text' placeholder='Search' className="text-gray-400 text-md font-semibold w-full h-full focus:outline-none"/>
          <button className="text-white" onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col">
            {/* Home Item */}
            <a href="#" className="px-6 py-3 text-white border-b border-[#333333]">
              Home
            </a>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-[#333333]">
                {item.hasDropdown ? (
                  <div 
                    className="px-6 py-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleItem(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform duration-300 ${expandedItems[item.name] ? 'rotate-180' : ''}`}
                    />
                  </div>
                ) : (
                  <a href="#" className="px-6 py-4 block text-white">
                    {item.name}
                  </a>
                )}

                {/* Dropdown Content */}
                {item.hasDropdown && expandedItems[item.name] && (
                  <div className="bg-[#333333] px-6 py-3">
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white block py-1">Submenu Item 1</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white block py-1">Submenu Item 2</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white block py-1">Submenu Item 3</a></li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

       
      </div>
    </>
  );
};

export default Header;