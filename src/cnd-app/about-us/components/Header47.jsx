"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useEffect } from "react";
import MyImage from '../../../assets/About us page.png';

export function Header47() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector('.header-heading');
    const description = document.querySelector('.header-description');
    const image = document.querySelector('.header-image');
    
    if (heading) heading.classList.add('slide-in-left');
    if (description) description.classList.add('fade-in');
    if (image) image.classList.add('slide-in-right');
  }, []);

  return (
    <section id="chargeNDrive" className="bg-gradient-to-br from-governor-bay to-mineral-green text-white px-[5%] py-16 md:py-24 lg:py-28 pt-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-accent">Our Story</p>
            <h1 className="header-heading mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Connecting EV Owners with Local Hosts
            </h1>
            <p className="header-description md:text-md text-french-gray">
              ChargeNextDoor was founded with a simple mission: to make EV charging more accessible, 
              affordable, and community-driven. We believe in the power of sharing resources to 
              create a more sustainable future.
            </p>
            {/* <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
              <Button 
                title="Our Mission"
                className="bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-pulse"
              >
                Our Mission
              </Button>
              <Button 
                title="Meet the Team" 
                variant="secondary"
                className="bg-transparent text-white font-bold border-2 border-accent rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1"
              >
                Meet the Team
              </Button>
            </div> */}
          </div>
          <div>
            <img
              src={MyImage}
              className="header-image w-full rounded-xl object-cover shadow-xl floating"
              alt="Team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 