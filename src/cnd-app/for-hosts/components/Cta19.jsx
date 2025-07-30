"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Unlock Passive Income - Join the Waitlist
          </h2>
          <p className="md:text-md text-black">
            Be among the first to earn by sharing your EV charger with eager drivers. 
            Reserve your spot and start hosting when we launch!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
            <Button title="Download and Sign Up" className="pulse bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open("https://apps.apple.com/au/app/chargenextdoor/", "_blank")}
            >(Apple) Download</Button>
            <Button title="Join Waitlist for Android" className="pulse bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor#SignupForm_0", "_blank")}
            >(Android) Waitlist</Button>
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
