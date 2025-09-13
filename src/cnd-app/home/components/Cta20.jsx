"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";
import { FaBolt, FaEnvelope } from "react-icons/fa";

export function Cta20() {
  return (
    <section id="">
    {/* <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-governor-bay to-malachite text-white overflow-hidden"> */}
      {/* Decorative elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div> */}
      
      {/* Lightning bolt decorations
      <div className="absolute top-10 left-10 text-white/20 size-16">
        <FaBolt />
      </div>
      <div className="absolute bottom-10 right-10 text-white/20 size-16">
        <FaBolt />
      </div> */}
      
      {/* <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="flex items-center text-white font-semibold">
              <FaEnvelope className="mr-2" /> Stay Connected
            </span>
          </div>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl bg-gradient-to-r from-white to-french-gray/80 bg-clip-text text-transparent">
            Stay Updated on EV Charging
          </h2>
          <p className="md:text-md text-french-gray">
            Join our newsletter for the latest news and updates on EV charging
            solutions.
          </p>
          <div className="mt-8 w-full max-w-sm md:mt-10">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <div className="relative">
                <Input id="email" type="email" placeholder="Your Email Here" className="bg-white/10 backdrop-blur-sm border-french-gray/30 text-white placeholder-french-gray/50 pl-10 py-3" />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-french-gray/50" />
              </div>
              <Button title="Subscribe Now" className="bg-green hover:bg-french-gray text-dark-turquoise font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">Subscribe Now</Button>
            </form>
            <p className="text-xs text-french-gray">
              By clicking Subscribe Now, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
