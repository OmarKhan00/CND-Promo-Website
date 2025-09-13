import React from "react";
import { Button } from "../../../components/ui/button";
import MyImage from '../../../assets/ev-plugged-in.png';

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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-muted rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-muted rounded-full blur-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center">
        <div className="w-full max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-muted border rounded-full text-sm font-medium text-foreground shadow-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Join the Revolution ⚡
          </div>

          {/* Heading */}
          <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-foreground mb-6">
            Join the EV Charging Revolution
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Become a host or EV owner and help shape the future of electric vehicle charging.
            Join our community and be part of the sustainable transportation revolution.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button
              onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              className="group px-8 py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105"
            >
              Join the Waitlist for Android
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/contact-us")}
              className="group px-6 py-3 text-lg font-semibold"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
