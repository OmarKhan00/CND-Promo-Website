"use client";

import React from "react";
import { FaBolt, FaUsers, FaLeaf } from "react-icons/fa";
import MyImage from '../../../assets/Person-Charging-EV-2.jpg';

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          {/* Text Content - LEFT SIDE */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Our Story ⚡
            </div>
            
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Connecting EV Owners with Local Hosts
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              ChargeNextDoor was founded with a simple mission: to make EV charging more accessible, 
              affordable, and community-driven. We believe in the power of sharing resources to 
              create a more sustainable future.
            </p>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-8">
              <div className="p-4 rounded-xl bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <div className="mb-3 flex justify-center">
                  <div className="size-10 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <FaBolt className="size-5 text-emerald-600" />
                  </div>
                </div>
                <h6 className="text-sm font-bold text-gray-800 mb-1">Innovation</h6>
                <p className="text-xs text-gray-600">Leading EV charging solutions</p>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <div className="mb-3 flex justify-center">
                  <div className="size-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <FaUsers className="size-5 text-blue-600" />
                  </div>
                </div>
                <h6 className="text-sm font-bold text-gray-800 mb-1">Community</h6>
                <p className="text-xs text-gray-600">Connecting neighbors</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-white/80 to-green-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
                <div className="mb-3 flex justify-center">
                  <div className="size-10 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    <FaLeaf className="size-5 text-green-600" />
                  </div>
                </div>
                <h6 className="text-sm font-bold text-gray-800 mb-1">Sustainability</h6>
                <p className="text-xs text-gray-600">Green future together</p>
              </div>
            </div>
          </div>

          {/* Image - RIGHT SIDE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={MyImage}
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl relative z-10"
                alt="Electric vehicle charging"
              />
              
              {/* Floating glassmorphism elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-400/15 to-blue-400/15 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:from-emerald-400/25 hover:to-blue-400/25 hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '3s'}}>
                <span className="text-2xl opacity-80">⚡</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-blue-400/15 to-purple-400/15 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:from-blue-400/25 hover:to-purple-400/25 hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '4s'}}>
                <span className="text-xl opacity-80">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 