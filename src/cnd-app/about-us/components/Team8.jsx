"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import STimage from '../../../assets/ST.jpg';
import OKimage from '../../../assets/OK.jpeg';
import KSimage from '../../../assets/KS.jpg';
import EEimage from '../../../assets/EE.jpg';

export function Team8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20 text-center mx-auto">
          <p className="mb-3 font-semibold md:mb-4">Innovative</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Our Team
          </h2>
          <p className="md:text-md text-black">
            Meet the passionate individuals behind our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={STimage}
              alt="Relume placeholder image 1"
              className="w-full h-67 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Saad Taslaq</h3>
              <p className="mb-3 text-sm text-accent">Founder</p>
              <div className="mt-4 flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/saadtaslaq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                {/* <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a> */}
                {/* <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoDribbble className="size-6" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={EEimage}
              alt="Relume placeholder image 1"
              className="w-full h-67 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Eltayeb Elsunni</h3>
              <p className="mb-3 text-sm text-accent">Co-founder</p>
              <div className="mt-4 flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/eltayebelsunni?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                {/* <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoDribbble className="size-6" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={KSimage}
              alt="Relume placeholder image 1"
              className="w-full h-67 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Kyle Steele</h3>
              <p className="mb-3 text-sm text-accent">Co-founder</p>
              <div className="mt-4 flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/kyle-steele-6832ba174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                {/* <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoDribbble className="size-6" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={OKimage}
              alt="Relume placeholder image 1"
              className="w-full h-67 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-1 text-xl font-bold">Omar Khan</h3>
              <p className="mb-3 text-sm text-accent">Co-founder</p>
              <div className="mt-4 flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/omar-khan-ecse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                {/* <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a 
                  href="#"
                  className="text-french-gray hover:text-accent transition-colors duration-300 hover:scale-110"
                >
                  <BiLogoDribbble className="size-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24" />
      </div>
    </section>
  );
}
