"use client";

// import Button removed: unused
import React, { useEffect } from "react";
import MyImage from "../../../assets/Person-Charging-EV-2.jpg";

import SignUpButton from '../../../assets/Buttons/SignUpButton';


export function Header1() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector(".header-heading");
    const description = document.querySelector(".header-description");
    const buttons = document.querySelector(".header-buttons");
    const image = document.querySelector(".header-image");

    if (heading) heading.classList.add("slide-in-left");
    if (description) description.classList.add("fade-in");
    if (buttons) buttons.classList.add("fade-in");
    if (image) image.classList.add("slide-in-right");
  }, []);

  

  

  return (
    <section
      id="chargeNDrive"
      className="bg-gradient-subtle px-[5%] py-16 md:py-24 lg:py-28 text-white pt-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="header-heading mb-6 text-5xl font-extrabold md:mb-8 md:text-6xl lg:text-7xl leading-tight">
              Power Your Electric Vehicle with Local Hosts
            </h1>
            <p className="header-description md:text-lg text-gray-200 mb-6 max-w-md">
              Join the community-driven EV charging network—fast charging locations,
              transparent pricing, and reliable hosts near you. Charge confidently,
              wherever you go.
            </p>
            <div className="header-buttons mt-6 flex justify-center gap-4 md:mt-8">
              <a
                href="/contact-us" // or any path you want to link to
                className="bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg px-4 py-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 "
              >
                Learn More
              </a>
              {/* <Button
                title="Sign Up"
                onClick={handleSignUp}
                variant="secondary"
                className="bg-transparent text-white font-bold border-2 border-accent rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1"
              >
                Sign Up
              </Button> */}
              <SignUpButton/>
            </div>
          </div>
          <div>
            <img
              src={MyImage}
              className="header-image w-full rounded-xl object-cover shadow-xl floating"
              alt="Electric vehicle charging"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
