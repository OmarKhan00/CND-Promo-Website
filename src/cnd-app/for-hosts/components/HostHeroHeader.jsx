"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect } from "react";

export function HostHeroHeader() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector('.header-heading');
    const description = document.querySelector('.header-description');
    const buttons = document.querySelector('.header-buttons');
    
    if (heading) heading.classList.add('slide-in-left');
    if (description) description.classList.add('fade-in');
    if (buttons) buttons.classList.add('fade-in');
  }, []);

  return (
    <section id="chargeNDrive" className="bg-gradient-to-br from-governor-bay to-mineral-green text-white px-[5%] py-16 md:py-24 lg:py-28 pt-32">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4 text-accent">Host Benefits</p>
            <h1 className="header-heading text-6xl font-bold md:text-7xl lg:text-8xl">
              Share Your Charger, Earn Money
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="header-description md:text-md text-french-gray">
              Turn your home EV charger into a source of income by sharing it with drivers in your area. 
              Our platform makes it easy to list your charger, set your rates, and manage bookings.
            </p>
            <div className="header-buttons mt-6 flex justify-center flex-wrap gap-4 md:mt-8">
              <Button 
                title="Become a Host"
                className="bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              >
                Become a Host
              </Button>
            
              <Button 
                title="Learn More" 
                variant="secondary"
                onClick={() => window.location.href = "/contact-us"}
                className="bg-transparent text-white font-bold border-2 border-accent rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1"
              >
                Learn More
              </Button>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 