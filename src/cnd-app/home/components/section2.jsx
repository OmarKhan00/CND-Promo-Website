

"use client";

import React from "react";
import { FaHome, FaCar, FaBolt } from "react-icons/fa";
import AutoPlayVideo from './autoplay';

export function Section2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Main content grid - iPhone on left, text on right */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          {/* iPhone Mockup with Video - LEFT SIDE */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative">
              {/* iPhone outer frame with enhanced realism */}
              <div className="w-[320px] h-[650px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[50px] p-[3px] shadow-2xl relative">
                {/* Side buttons */}
                <div className="absolute left-[-2px] top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-sm"></div>
                <div className="absolute left-[-2px] top-[200px] w-[3px] h-[35px] bg-gray-700 rounded-l-sm"></div>
                <div className="absolute left-[-2px] top-[250px] w-[3px] h-[35px] bg-gray-700 rounded-l-sm"></div>
                <div className="absolute right-[-2px] top-[180px] w-[3px] h-[80px] bg-gray-700 rounded-r-sm"></div>
                
                {/* Inner screen bezel */}
                <div className="w-full h-full bg-black rounded-[47px] relative overflow-hidden border border-gray-800">
                  {/* Dynamic Island (iPhone 14+ style) */}
                  <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[30x] bg-black rounded-full z-30 shadow-inner border border-gray-900"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[47px] overflow-hidden relative">
                    <AutoPlayVideo />
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-white/60 rounded-full"></div>
                </div>
                
                {/* Subtle screen reflection overlay */}
                <div className="absolute inset-[3px] rounded-[47px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Enhanced Floating Glassmorphism Elements */}
              {/* <div className="absolute -top-16 -left-16 w-16 h-16 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:from-emerald-400/25 hover:to-blue-400/25 hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '10s'}}>
                <span className="text-2xl opacity-80">⚡</span>
              </div>
              <div className="absolute -bottom-16 -right-16 w-14 h-14 bg-gradient-to-br from-blue-400/15 to-purple-400/15 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:from-blue-400/25 hover:to-purple-400/25 hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '10s'}}>
                <span className="text-xl opacity-80">🔌</span>
              </div>
              <div className="absolute top-20 -right-20 w-12 h-12 bg-gradient-to-br from-emerald-300/10 to-blue-300/10 backdrop-blur-sm rounded-xl border border-white/15 flex items-center justify-center shadow-md hover:from-emerald-300/20 hover:to-blue-300/20 hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '10s'}}>
                <span className="text-lg opacity-70">📱</span>
              </div> */}
            </div>
          </div>

          {/* Text Content - RIGHT SIDE */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Connect & Charge ⚡
            </div>
            
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Unlock the Power of Convenient EV Charging with Our Innovative Platform
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform bridges the gap between EV owners and hosts with underutilized chargers. 
              Enjoy seamless access to charging solutions right in your neighborhood.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
              <div className="p-5 rounded-xl bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="mb-3">
                  <div className="size-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <FaHome className="size-6 text-emerald-600" />
                  </div>
                </div>
                <h6 className="text-lg font-bold text-gray-800 mb-2">For Hosts</h6>
                <p className="text-gray-600">
                  Earn extra income by sharing your home charger with local EV drivers.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="mb-3">
                  <div className="size-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <FaCar className="size-6 text-blue-600" />
                  </div>
                </div>
                <h6 className="text-lg font-bold text-gray-800 mb-2">For EV Owners</h6>
                <p className="text-gray-600">
                  Access reliable charging options conveniently located near you, anytime you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons at Bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:mt-20">
          <a 
            href="https://mailchi.mp/d3662d8474be/chargenextdoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-300/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-700 hover:text-blue-800 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 px-8 py-4 text-lg shadow-lg group"
          >
            Join the Waitlist for Android
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="/contact-us"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-purple-700 text-lg bg-gradient-to-r from-white/10 to-blue-50/20 backdrop-blur-sm border border-blue-200/40 hover:border-purple-300/50 rounded-xl px-6 py-3 hover:bg-gradient-to-r hover:from-white/20 hover:to-purple-50/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold group"
          >
            Learn More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      {/* Background decorative elements - enhanced with more malachite elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-governor-bay/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-malachite/15 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-40 h-40 bg-malachite/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-malachite/10 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm animate-fade-in mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Innovative EV Charging ⚡
            </div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl bg-gradient-to-r from-malachite to-governor-bay bg-clip-text text-transparent">
              Unlock the Power of Convenient EV Charging with Our Innovative
              Platform
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-black">
              Our platform bridges the gap between EV owners and hosts with
              underutilized chargers. Enjoy seamless access to charging
              solutions right in your neighborhood.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="block p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10 group">
                <div className="mb-3 md:mb-4">
                  <div className="size-12 rounded-full bg-governor-bay/15 flex items-center justify-center group-hover:bg-governor-bay/25 transition-colors duration-300">
                    <FaHome className="size-6 text-governor-bay" />
                  </div>
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl text-governor-bay group-hover:text-governor-bay/80 transition-colors duration-300">
                  For Hosts
                </h6>
                <p className="text-black group-hover:text-gray-700 transition-colors duration-300">
                  Earn extra income by sharing your home charger with local EV
                  drivers.
                </p>
              </div>
              <div className="block p-5 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10 group">
                <div className="mb-3 md:mb-4">
                  <div className="size-12 rounded-full bg-malachite/15 flex items-center justify-center group-hover:bg-malachite/25 transition-colors duration-300">
                    <FaCar className="size-6 text-malachite" />
                  </div>
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl text-governor-bay group-hover:text-governor-bay/80 transition-colors duration-300">
                  For EV Owners
                </h6>
                <p className="text-black group-hover:text-gray-700 transition-colors duration-300">
                  Access reliable charging options conveniently located near
                  you, anytime you need.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-governor-bay/20 rounded-xl transform rotate-3"></div>
            <img
              src={require('../../../assets/Host and Driver.png')}
              className="w-full rounded-xl object-cover shadow-xl relative z-10"
              alt="EV charging station"
            />
            <div className="absolute -bottom-4 -right-4 p-3 bg-white rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-malachite flex items-center justify-center">
                  <FaBolt className="size-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Fast Charging</p>
                  <p className="text-xs text-french-gray">Available Nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}