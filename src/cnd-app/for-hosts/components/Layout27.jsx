import React from "react";
import MyImage from '../../../assets/rating.png';
import HowItWorks from './HowItWorks';


export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 ">
          <div>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay">
              Get Ready to Earn Passive Income by Hosting EV Chargers in Your Community
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-black">
            Be part of an exciting new opportunity—join a 
            growing community of early adopters already 
            waiting to start earning from their underutilized EV chargers.
            Sign up now and get priority access when we launch,
            and be among the first to earn from this innovative passive income opportunity.
            </p>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  __%
                </h3>
                <p>of early sign-ups are excited about the potential to generate income from their chargers..</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  __%
                </h3>
                <p>are eager to recommend hosting to others once the platform goes live.</p>
              </div>
            </div> */}
          </div>
          <div>
            <img
              src={MyImage}
              className="w-full rounded-image object-cover"
              alt="Rating and reviews illustration for host earnings"
            />
          </div>
        </div>
        <HowItWorks />
      </div>
    </section>
  );
}
