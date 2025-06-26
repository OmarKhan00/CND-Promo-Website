"use client";

import React, { useEffect } from "react";
import AppStoreButton from "../../../assets/Buttons/AppStoreButton";
import PlayStoreButton from "../../../assets/Buttons/PlayStoreButton";

export function Cta7() {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.cta-animate');

    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="chargeNDrive" className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 px-[5%] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/15 to-emerald-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-100/10 to-blue-100/10 rounded-full blur-2xl slow-bounce"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 lg:p-16">
          <div className="grid w-full grid-cols-1 items-center justify-between gap-8 md:grid-cols-[1fr_auto] md:gap-x-16 lg:gap-x-24">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Ready to Get Started?
              </div>
              
              <h2 className="cta-animate text-4xl leading-tight font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
                Charge Your EV with Ease
              </h2>
              
              <p className="cta-animate text-lg text-slate-600 max-w-xl leading-relaxed">
                Join our community of hosts and EV owners today! 
                <span className="text-emerald-600 font-medium"> Start your journey towards sustainable charging.</span>
              </p>
            </div>
            
            {/* Store Download Buttons - Enhanced Design */}
            <div className="cta-animate flex flex-col gap-4 md:gap-6">
              <AppStoreButton 
                href="https://apps.apple.com/au/app/chargenextdoor/" 
                className="transform hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1"
              />
              <PlayStoreButton 
                href="https://mailchi.mp/d3662d8474be/chargenextdoor" 
                className="transform hover:scale-110 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:-rotate-1"
              />
            </div>
          </div>
          
          {/* Additional trust elements */}
          <div className="mt-12 pt-8 border-t border-slate-200/50">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Trusted by 1000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Secure & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Fast Charging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
