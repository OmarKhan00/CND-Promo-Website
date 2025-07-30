"use client";

import React from "react";
import MyImage from '../../../assets/EV Plugged in.png';

export function Cta3() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={MyImage}
          className="size-full object-cover"
          alt="EV plugged in charging"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50/90 to-blue-50/90 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-md mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Join the Revolution ⚡
          </div>

          {/* Heading */}
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-emerald-100 to-blue-100 bg-clip-text text-transparent mb-6">
            Join the EV Charging Revolution
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Become a host or EV owner and help shape the future of electric vehicle charging. 
            Join our community and be part of the sustainable transportation revolution.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/90 to-blue-500/90 backdrop-blur-md border border-emerald-300/50 hover:border-emerald-400/70 hover:from-emerald-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 px-8 py-4 text-lg shadow-lg group"
            >
              Join the Waitlist for Android
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <a 
              href="/contact-us"
              className="inline-flex items-center gap-2 text-white hover:text-emerald-200 text-lg bg-gradient-to-r from-white/10 to-emerald-50/20 backdrop-blur-md border border-white/30 hover:border-emerald-300/50 rounded-xl px-6 py-3 hover:bg-gradient-to-r hover:from-white/20 hover:to-emerald-50/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold group"
            >
              Learn More
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
