"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa6";

export function Testimonial14() {
  return (
    <section id="testimonial" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 px-[5%] py-20 md:py-28 lg:py-32 overflow-hidden">
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
                CND made it so easy to get started. 
                I tested it out and made a couple of dollars renting out my EV charger - super simple! 
                It’s great connecting with EV drivers who appreciate the convenience of charging at my place.
              </blockquote>
            </div>

            <div className="mt-8 flex justify-center md:mt-10">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl max-w-fit">
                <div className="size-16 rounded-full bg-gradient-to-br from-blue-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  {/* <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=3b82f6&clothesColor=262e33&eyebrowType=default&eyeType=happy&facialHairType=light&hairColor=4a5568&hatColor=262e33&mouthType=smile&skinColor=f3a683&topType=shortHairShortWaved"
                    alt="James Avatar"
                    className="w-12 h-12 rounded-full"
                  /> */}
                  <span className="text-xl font-bold text-white">J</span>
                </div>
                <div>
                <p className="font-semibold text-white">James S.</p>
                <p className="text-white/70">Host, Private Residence</p>
               </div>
              </div>
            </div>
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
                Hosting has never been easier! I've connected with great EV
                owners who appreciate the convenience of charging at my home.
              </blockquote>
            </div>
            <div className="mt-8 flex justify-center w-full md:mt-10">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl max-w-fit">
                <div className="size-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-lg">
                  {/* <img 
                    src="https://api.dicebear.com/9.x/micah/svg?seed=Aidan&eyeShadowColor[]&hairColor=f4d150&mouth=laughing,smile,smirk"
                    alt="William Avatar"
                    className="w-12 h-12 rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  /> */}
                  <span className="text-xl font-bold text-white">W</span>
                </div>
                <div>
                  <p className="font-semibold text-white">William W.</p>
                  <p className="text-white/70">Host, Private Residence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
