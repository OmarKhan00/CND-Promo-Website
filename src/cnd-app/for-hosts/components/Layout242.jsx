"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import MyImage from '../../../assets/EasyIcon.png';
import MyImage2 from '../../../assets/Network growth.png';
import MyImage3 from '../../../assets/FlexSchedule.png';


export function Layout242() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className=" rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20 mx-auto ">
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-center text-governor-bay ">
             Why Rent out on CND platfrom?
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12  md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="flex justify-center mb-1">
              <img
                src={MyImage2}
                alt="..."
                className="size-40"
              />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay ">
                Join a Growing Network of EV Hosts
              </h3>
              <p className="mb-5 md:mb-6">
                Be part of the movement! Thousands have already joined our waitlist, making CND the fastets growing peer to peer
                EV charging platform
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-1">
                <img
                  src={MyImage}
                  alt="Easy Icon"
                  className="size-40"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay ">
                Simple Setup, Fast Start 
              </h3>
              <p className="mb-5 md:mb-6 text-black">
                Setting up your charger is a breeze with our user-friendly
                interface and no technical expereince required.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {/* <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                  className="text-governor-bay hover:text-malachite text-lg"
                >
                  Sign Up
                        
                </Button> */}
              </div>
            </div>
            <div>
              <div className="flex justify-center mb-1">
                <img
                  src={MyImage3}
                  alt="Relume logo 1"
                  className="size-40"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-governor-bay">
                Flexible Scheduling: Control When Your Charger is Available
              </h3>
              <p className="mb-5 md:mb-6 text-black">
                You decide the hours your charger is accessible to EV drivers.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {/* <Button
                  iconRight={<RxChevronRight />}
                  variant="link"
                  size="link"
                >
                  Get Started
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
