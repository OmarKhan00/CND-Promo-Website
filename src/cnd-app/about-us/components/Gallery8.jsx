"use client";

import React from "react";
import MyImage2 from '../../../assets/Person-using-smartphone-to-book-a-charger-in-car.jpeg';
import MyImage3 from '../../../assets/Brainstorming.png';
import MyImage4 from '../../../assets/Testing Charger in site.jpeg';
import MyImage5 from '../../../assets/EV charger in garage.jpeg';
import MyImage6 from '../../../assets/chargingcommunity.webp';

export function Gallery8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Photo Showcase
          </h2>
          <p className="md:text-md text-black">
            Explore our journey and community connections through images.
          </p>
        </div>
        
        <div className="gap-x-8 md:columns-2">
          <a href="#" className="mb-8 inline-block w-full">
            <div className="relative inline-block w-full pt-[100%]">
              <img
                src={MyImage2}
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full rounded-image object-cover"
              />
            </div>
          </a>
          
          <a href="#" className="mb-8 inline-block w-full">
            <div className="relative inline-block w-full pt-[66.66%]">
              <img
                src={MyImage6}
                alt="Relume placeholder image 2"
                className="absolute inset-0 size-full rounded-image object-cover"
              />
            </div>
          </a>
          <a href="#" className="mb-8 inline-block w-full">
            <div className="relative inline-block w-full pt-[150%]">
              <img
                src={MyImage5}
                alt="Relume placeholder image 3"
                className="absolute inset-0 size-full rounded-image object-cover"
              />
            </div>
          </a>
          <a href="#" className="mb-8 inline-block w-full">
            <div className="relative inline-block w-full pt-[150%]">
              <img
                src={MyImage4}
                alt="Relume placeholder image 4"
                className="absolute inset-0 size-full rounded-image object-cover"
              />
            </div>
          </a>
          <a href="#" className="mb-8 inline-block w-full">
            <div className="relative inline-block w-full pt-[100%]">
              <img
                src={MyImage3}
                alt="Relume placeholder image 5"
                className="absolute inset-0 size-full rounded-image object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
