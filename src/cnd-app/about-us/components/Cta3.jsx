"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import MyImage from '../../../assets/EV Plugged in.png';

export function Cta3() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-lg text-center">
          <h2 className="mb-5  text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl ">
            Join the EV Charging Revolution
          </h2>
          <p className="text-text-alternative md:text-md">
            Become a host or EV owner and help shape the future of electric
            vehicle charging.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
            <Button title="Sign Up"className="pulse bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
                        onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
                        >Join the Waitlist</Button>
            {/* <Button title="Learn More" variant="secondary-alt">
              Learn More
            </Button> */}
             <a
                href="/contact-us" // or any path you want to link to
                className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-pulse px-8 py-3 text-lg "
              >
                Learn More
              </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={MyImage}
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
