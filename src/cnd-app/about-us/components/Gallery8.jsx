"use client";

import React from "react";
import MyImage2 from '../../../assets/Person-using-smartphone-to-book-a-charger-in-car.jpeg';
import MyImage3 from '../../../assets/Brainstorming.png';
import MyImage4 from '../../../assets/Testing Charger in site.jpeg';
import MyImage5 from '../../../assets/EV charger in garage.jpeg';
import MyImage6 from '../../../assets/chargingcommunity.webp';

export function Gallery8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6 mx-auto">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Our Journey 📸
          </div>
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Photo Showcase
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Explore our journey and community connections through images that tell the story of EV charging innovation.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="gap-x-8 md:columns-2">
          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[100%] rounded-2xl overflow-hidden bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage2}
                alt="Person using smartphone to book charger"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[66.66%] rounded-2xl overflow-hidden bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage6}
                alt="Charging community"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[150%] rounded-2xl overflow-hidden bg-gradient-to-r from-white/80 to-purple-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage5}
                alt="EV charger in garage"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[150%] rounded-2xl overflow-hidden bg-gradient-to-r from-white/80 to-teal-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage4}
                alt="Testing charger on site"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[100%] rounded-2xl overflow-hidden bg-gradient-to-r from-white/80 to-orange-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage3}
                alt="Team brainstorming session"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
