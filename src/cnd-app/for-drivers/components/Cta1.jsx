"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Charge Smart, Save Big
          </h2>
          <p className="md:text-md text-black">
            We’re launching soon — 
            find affordable home chargers near you and charge your EV with ease and confidence
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
           <Button title="Sign Up"className="pulse bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
           onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
           >Joint the Waitlist</Button>
                       <Button title="Learn More" variant="secondary" className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg "
                       onClick={() => window.location.href = "/contact-us"}
                       >
                         Learn More
                       </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


