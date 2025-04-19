"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";
import AutoPlayVideo from './autoplay';

export function Layout26() {
  return (
    // bg-mineral-green/90
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-black">Connect</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay ">
              Discover the Future of EV Charging Today
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-black/80">
              Be part of a community that’s shaping the future of EV charging. 
              Our platform is designed to connect EV owners with hosts offering convenient and accessible 
              charging solutions right in your neighborhood.
            </p>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-white">
                  __%
                </h3>
                <p className="text-white/80">User satisfaction rate among our EV owners.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-white">
                  __%
                </h3>
                <p className="text-white/80">Hosts report increased earnings from unused chargers.</p>
              </div>
            </div> */}
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                {/* Pre-Launch Special */}
                <div>
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl text-governor-bay">
                    🚀 Pre-Launch Special: Zero  Platfrom fees for 30 Days!
                  </h3>
                  <p className="text-black/80">
                    Join now and start earning passive income with zero platform fees. Sign up for the waitlist and be among the first to experience a revolutionary new way to charge your EV
                  </p>
                </div>

                {/* Why Join Us */}
                <div>
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl text-governor-bay">
                    💡 Why Join Us?
                  </h3>
                  <ul className="text-black list-inside space-y-2">
                    <li>Stay Ahead of the Curve: Be the first to experience the future of EV charging.</li>
                    <li>Help Shape the Future: Provide feedback during the early stages and make your voice heard.</li>
                    <li>Exclusive Offers: Sign up today for special perks and benefits as we prepare to launch.</li>
                  </ul>
                </div>
              </div>
            <div className="mt-6 flex flex-wrap items-center  gap-4 md:mt-8 flex">
              {/* <Button title="Learn More" variant="secondary" className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-pulse px-8 py-3 text-lg">
                Learn More
              </Button> */}
                 <a
                href="/contact-us" // or any path you want to link to
                className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-pulse px-8 py-3 text-lg "
              >
                Learn More
              </a>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="text-governor-bay hover:text-malachite text-lg"
                onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              >
                Sign Up
              </Button>
            </div>
          </div>
            <AutoPlayVideo/>
          </div>
      </div>
    </section>
  );
}
