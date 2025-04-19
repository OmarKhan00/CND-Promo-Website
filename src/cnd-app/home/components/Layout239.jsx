"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import MyImage from '../../../assets/Person-using-smartphone-to-locate-chargers.jpg';
import MyImage2 from '../../../assets/Person-using-smartphone-to-book-a-charger-in-car.jpeg';

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black relative overflow-hidden">
      {/* Background decorative elements - added governor bay tinge from right side */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-governor-bay/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-governor-bay/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-governor-bay/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-governor-bay/5 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <div className="inline-block mb-4 px-4 py-2 bg-governor-bay/15 rounded-full">
                <span className="text-governor-bay font-semibold">Connect & Charge</span>
              </div>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay  ">
                Discover Your Nearest EV Charger Today
              </h2>
              <p className="md:text-md text-black">
                Find EV chargers near you with ease. Our platform connects you
                to hosts offering their chargers for convenient access.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-governor-bay/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={MyImage}
                  alt="Person using smartphone to locate chargers"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Easily Locate Chargers in Your Area
              </h3>
              <p className="text-black">Our user-friendly interface makes finding chargers simple.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-malachite/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={MyImage2}
                  alt="Woman using smartphone to book a charger"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Book Your Charger with Just a Click
              </h3>
              <p className="text-black">Secure your charging spot quickly and effortlessly.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-turquoise/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Secure payment"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Safe and Reliable Payment Options
              </h3>
              <p className="text-black">Enjoy peace of mind with our secure payment system.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-16">
            <Button variant="secondary" className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-pulse px-8 py-3 text-lg">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link" className="text-governor-bay hover:text-malachite text-lg">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
