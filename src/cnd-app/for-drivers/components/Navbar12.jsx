"use client";

import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import logo from "../../../assets/CND_Logo.png";

export function Navbar12() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-mineral-green to-governor-bay border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Increased to h-16 */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="ChargeNext Door Logo" className="h-16 w-auto" />
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className={`lg:flex ${isMobileMenuOpen ? 'block absolute top-16 left-0 right-0 bg-mineral-green p-4 z-50' : 'hidden'} lg:static lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:items-center">
              <li>
                <a href="/" className="text-white hover:text-accent transition-colors duration-300 block py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-white hover:text-accent transition-colors duration-300 block py-2">
                  About Us
                </a>
              </li>
              <li className="relative">
                {/* Services dropdown */}
                <div className="relative">
                  <button 
                    className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-1 py-2"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                    <RxChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`${isDropdownOpen ? 'block' : 'hidden'} lg:absolute lg:top-full lg:left-0 bg-mineral-green p-4 rounded-lg shadow-lg mt-2 z-50`}
                  >
                    <a href="/for-hosts" className="text-white hover:text-accent transition-colors duration-300 block py-2 whitespace-nowrap">
                      For Hosts
                    </a>
                    <a href="/for-drivers" className="text-white hover:text-accent transition-colors duration-300 block py-2 whitespace-nowrap">
                      For Drivers
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="/contact-us" className="text-white hover:text-accent transition-colors duration-300 block py-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
