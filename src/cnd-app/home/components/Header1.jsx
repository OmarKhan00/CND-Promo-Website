// import Button removed: unused
import React, { useEffect } from "react";
import MyImage from "../../../assets/about-us-page.png";
import AppStoreButton from '../../../assets/Buttons/AppStoreButton';
import PlayStoreButton from '../../../assets/Buttons/PlayStoreButton';


export function Header1() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector(".header-heading");
    const description = document.querySelector(".header-description");
    const buttons = document.querySelector(".header-buttons");
    const image = document.querySelector(".header-image");

    if (heading) heading.classList.add("slide-in-left");
    if (description) description.classList.add("fade-in");
    if (buttons) buttons.classList.add("fade-in");
    if (image) image.classList.add("slide-in-right");
  }, []);

  return (
    <section
      id="chargeNDrive"
      className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50 px-[5%] py-16 md:py-24 lg:py-28 text-slate-900 pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-full blur-2xl animate-bounce slow-bounce"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm animate-fade-in">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Officially Launched
            </div>
            
            <h1 className="header-heading text-5xl font-bold md:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-700 bg-clip-text text-transparent animate-slide-up">
              Power Your Electric Vehicle with 
              <span className="block text-emerald-600">Local Hosts</span>
            </h1>
            
            <p className="header-description text-xl text-slate-600 max-w-xl leading-relaxed animate-fade-in-delay">
              Experience our early launch community-driven EV charging network. Discover fast charging locations,
              transparent pricing, and trusted hosts near you. 
              <span className="text-emerald-600 font-medium"> Be part of the charging revolution from day one.</span>
            </p>
            
            <div className="header-buttons flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6 animate-fade-in-delay-2">
              <AppStoreButton 
                href="https://apps.apple.com/au/app/chargenextdoor/" 
                className="transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              />
              <PlayStoreButton 
                href="https://mailchi.mp/d3662d8474be/chargenextdoor" 
                className="transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in-delay-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600 font-medium">Secure & Trusted</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-sm text-slate-600 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-sm text-slate-600 font-medium">Easy Setup</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 rounded-3xl blur-2xl transform rotate-6 scale-105"></div>
            <img
              src={MyImage}
              className="header-image relative w-full rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1"
              alt="Team working together"
            />
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl ">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.5 2v7H9L13 15v-7h2.5L11.5 2z"/>
                <path d="M3 12h3v2H3v-2zm15 0h3v2h-3v-2z"/>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
