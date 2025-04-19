"use client";

import React from "react";
import HowItWorks from "./HowItWorks";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import MyImage1 from '../../../assets/Host,EV Driver meet.png';
import MyImage2 from '../../../assets/Waiting.png';
import MyImage3 from '../../../assets/Afforable.png';
import MyImage4 from '../../../assets/EasyIcon.png';



export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay">
              Experience Secure and Convenient Charging at Trusted Hosts' Homes
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-black">
              Say goodbye to the anxiety of public charging stations. Our
              platform connects you with vetted hosts offering secure home
              charging options.
              Soon, you'll be able to experience secure and convenient charging at trusted hosts' homes.
            </p>
          </div>
          <div>
            <img
              src={MyImage1}
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>

        {/* "Why Rent Out" Section */}
        <div className="flex flex-col items-start mt-16">
          <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20 mx-auto ">
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-center text-governor-bay">
              Why use CND platform to charge your EV?
            </h3>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 ">
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-1">
                <img
                  src={MyImage3}
                  alt="..."
                  className="size-40"
                />
              </div>
              <h3 className=" min-h-[60px] mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay">
                Affordable Charging 
              </h3>
              <p className="mb-5 md:mb-6 text-black">
                Find charging spots that fit your budget. Our hosts offer competitive pricing compared to traditional public charging stations, 
                so you can charge your EV affordably without compromising quality
              </p>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-1">
                <img
                  src={MyImage4}
                  alt="Easy Icon"
                  className="size-40"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay">
                Simple Setup, No Technical Expertise Needed
              </h3>
              <p className="mb-5 md:mb-6 text-black">
                Setting up your charger is quick and easy.
                The CND platform provides a user-friendly interface that requires no technical expertise, ensuring a seamless experience from start to finish.
              </p>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-1">
                <img
                  src={MyImage2}
                  alt="Relume logo 1"
                  className="size-40"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay">
                No more waiting or charger hogging
              </h3>
              <p className="mb-5 md:mb-6 text-black">
                Say goodbye to long lines at public charging stations and the frustration of charger hogging. With CND, 
                you can easily find available home chargers near you—no crowds, no delays, just seamless charging when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* HowItWorks Component */}
        <HowItWorks />
      </div>
    </section>
  );
}
