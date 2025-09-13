import React from "react";
import MyImage2 from '../../../assets/person-using-smartphone-to-book-a-charger-in-car.jpeg';
import MyImage3 from '../../../assets/brainstorming.png';
import MyImage4 from '../../../assets/testing-charger-in-site.jpeg';
import MyImage5 from '../../../assets/ev-charger-in-garage.jpeg';
import MyImage6 from '../../../assets/charging-community.webp';

export function Gallery8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden bg-muted">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-muted rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-muted border rounded-full text-sm font-medium text-foreground shadow-sm mb-6 mx-auto">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Our Journey 📸
          </div>
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-foreground mb-6">
            Photo Showcase
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our journey and community connections through images that tell the story of EV charging innovation.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="gap-x-8 md:columns-2">
          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[100%] rounded-2xl overflow-hidden bg-muted backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage2}
                alt="Person using smartphone to book charger"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[66.66%] rounded-2xl overflow-hidden bg-muted backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage6}
                alt="Charging community"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[150%] rounded-2xl overflow-hidden bg-muted backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage5}
                alt="EV charger in garage"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[150%] rounded-2xl overflow-hidden bg-muted backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage4}
                alt="Testing charger on site"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="mb-8 inline-block w-full group">
            <div className="relative inline-block w-full pt-[100%] rounded-2xl overflow-hidden bg-muted backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={MyImage3}
                alt="Team brainstorming session"
                className="absolute inset-2 size-[calc(100%-16px)] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
