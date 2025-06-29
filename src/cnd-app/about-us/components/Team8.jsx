"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import STimage from '../../../assets/ST.jpg';
import OKimage from '../../../assets/OK.jpeg';
import KSimage from '../../../assets/KS.jpg';
import EEimage from '../../../assets/EE.jpg';

export function Team8() {
  return (
    <section className="px-[5%] py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl md:mb-18 lg:mb-20 text-center mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Meet the Team ⚡
          </div>
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Our Passionate Team
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Meet the dedicated individuals behind our mission to revolutionize EV charging through community connection.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {/* Saad Taslaq */}
          <div className="group rounded-2xl bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={STimage}
                alt="Saad Taslaq"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Saad Taslaq</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/saadtaslaq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="size-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-blue-600 hover:from-blue-500/30 hover:to-blue-600/30 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <BiLogoLinkedinSquare className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Eltayeb Elsunni */}
          <div className="group rounded-2xl bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={EEimage}
                alt="Eltayeb Elsunni"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eltayeb Elsunni</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/eltayebelsunni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="size-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-blue-600 hover:from-blue-500/30 hover:to-blue-600/30 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <BiLogoLinkedinSquare className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Kyle Steele */}
          <div className="group rounded-2xl bg-gradient-to-r from-white/80 to-purple-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={KSimage}
                alt="Kyle Steele"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Kyle Steele</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/kyle-steele-6832ba174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="size-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-blue-600 hover:from-blue-500/30 hover:to-blue-600/30 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <BiLogoLinkedinSquare className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Omar Khan */}
          <div className="group rounded-2xl bg-gradient-to-r from-white/80 to-teal-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={OKimage}
                alt="Omar Khan"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Omar Khan</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/omar-khan-ecse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="size-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-blue-600 hover:from-blue-500/30 hover:to-blue-600/30 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <BiLogoLinkedinSquare className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
