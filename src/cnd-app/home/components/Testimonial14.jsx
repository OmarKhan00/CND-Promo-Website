"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaCirclePlay, FaQuoteLeft } from "react-icons/fa6";

export function Testimonial14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-governor-bay/90 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            {/* <Dialog> */}
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
            </div>

            <div className="relative">
              <FaQuoteLeft className="absolute -top-6 -left-2 text-white/20 size-12" />
              <blockquote className="text-xl font-bold md:text-2xl text-white relative z-10 pl-4">
                "CND made it so easy to get started. 
                I tested it out and made a couple of dollars renting out my EV charger—super simple! 
                It’s great connecting with EV drivers who appreciate the convenience of charging at my place."
              </blockquote>
            </div>



            <div className="mt-8 flex justify-center md:mt-10">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl max-w-fit">
                <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">J</span>
                </div>
                <div>
                <p className="font-semibold text-white">James</p>
                <p className="text-white/70">Host, Private Residence</p>
               </div>
              </div>
            </div>

            
            
              {/* Commented out the video part as it's not relvetant no  */}
              {/* <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-xl group">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a56bbc8df48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Host testimonial"
                  className="size-full object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/50 rounded-xl"></span>
                <FaCirclePlay className="absolute z-20 size-16 text-malachite group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform-gpu" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <p className="text-sm font-semibold">Watch Kyle's Dad's Story</p>
                  <p className="text-xs text-white/70">2:45 min</p>
                </div>
              </DialogTrigger> */}
              {/* <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/oP3c1h8v2ZQ" />
              </DialogContent> */}
            {/* </Dialog> */}
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
            </div>
            <div className="relative">
              <FaQuoteLeft className="absolute -top-6 -left-2 text-white/20 size-12" />
              <blockquote className="text-xl font-bold md:text-2xl text-white relative z-10 pl-4">
                "Hosting has never been easier! I've connected with great EV
                owners who appreciate the convenience of charging at my home."
              </blockquote>
            </div>
            <div className="mt-8 flex flex-nowrap items-center gap-5 md:mt-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl font-bold text-white">KD</span>
              </div>
              <div>
                <p className="font-semibold text-white">Kyle's Dad</p>
                <p className="text-white/70">Host, Private Residence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
