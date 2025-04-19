"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay ">
            Host Testimonials
          </h1>
          <p className="md:text-md text-black">
            Hear what early beta testers had to say about their hosting expereince.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full w-full max-w-md flex-col items-center justify-between text-center mx-auto">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
            Hosting has never been easier! 
            I've connected with great EV owners who appreciate the convenience of charging at my home.
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              {/* <div className="mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div> */}
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">James</p>
                <p>Private residence (Beta Tester)</p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full max-w-md flex-col items-center justify-between text-center mx-auto">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
              <BiSolidStar className="size-6 text-malachite" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
            CND made it so easy to get started. I tested it out and made a couple of dollars renting out my EV charger—super simple! 
            It’s great connecting with EV drivers who appreciate the convenience of charging at my place
            </blockquote>
            <div className="mt-6 flex flex h-full w-full max-w-md flex-col items-center justify-between text-center mx-auto">
              {/* <div className="mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div> */}
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">Kyle Dad</p>
                <p>Private residence (Beta Tester)</p>
              </div>
            </div>
          </div>
          {/* <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
              TBD
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">TBD</p>
                <p>TBD</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
