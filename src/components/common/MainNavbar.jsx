"use client";

import React, { useState, useEffect } from "react";
import logo from "../../assets/CND_Logo.png";

export function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-xl border-b border-white/20 shadow-lg' 
        : 'bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with glassmorphism effect */}
          <a href="/" className="group flex items-center gap-3 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              <img
                src={logo}
                alt="ChargeNext Door Logo"
                className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent hidden sm:block">
              ChargeNextDoor
            </span>
          </a>

          {/* Desktop Navigation - Glassmorphism Pills */}
          <nav className="hidden lg:flex">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30">
              <a
                href="/"
                className="px-6 py-2 rounded-full text-white hover:bg-white/30 hover:text-white transition-all duration-300 text-sm font-medium hover:shadow-lg"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="px-6 py-2 rounded-full text-white/90 hover:bg-white/30 hover:text-white transition-all duration-300 text-sm font-medium hover:shadow-lg"
              >
                About
              </a>
              <a
                href="/contact-us"
                className="px-6 py-2 rounded-full text-white/90 hover:bg-white/30 hover:text-white transition-all duration-300 text-sm font-medium hover:shadow-lg"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* CTA Dropdown - Download/Waitlist */}
          <div className="hidden lg:block relative group">
            <button
              className="group relative overflow-hidden px-6 py-2 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 backdrop-blur-md border border-emerald-300/50 rounded-full text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-emerald-400/70"
            >
              <span className="relative z-10">Download / Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 border border-emerald-100/60">
              <a
                href="https://apps.apple.com/au/app/chargenextdoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-gray-900 hover:bg-emerald-50 hover:text-emerald-700 rounded-t-lg font-medium"
              >
                (Apple) Download
              </a>
              <a
                href="https://mailchi.mp/d3662d8474be/chargenextdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-700 rounded-b-lg font-medium"
              >
                (Android) Waitlist
              </a>
            </div>
          </div>

          {/* Mobile menu button - Animated */}
          <button
            className="lg:hidden relative w-8 h-8 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg border border-white/30"></div>
            <div className="relative flex flex-col items-center justify-center h-full">
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>

          {/* Mobile Navigation - Glassmorphism Overlay */}
          <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl">
              <nav className="flex flex-col items-center justify-center h-full space-y-8">
                <a
                  href="/"
                  className="text-white text-2xl font-medium hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="text-white text-2xl font-medium hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/contact-us"
                  className="text-white text-2xl font-medium hover:text-emerald-300 transition-all duration-300 hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="mt-8 flex flex-col gap-2 w-full px-8">
                  <a
                    href="https://apps.apple.com/au/app/chargenextdoor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-white bg-gradient-to-r from-emerald-500/40 to-blue-500/40 rounded-t-lg font-medium hover:bg-emerald-600/80 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    (Apple) Download
                  </a>
                  <a
                    href="https://mailchi.mp/d3662d8474be/chargenextdoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 text-white bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-b-lg font-medium hover:bg-blue-600/80 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    (Android) Waitlist
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
