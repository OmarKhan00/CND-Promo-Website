"use client";

import React from "react";
import { FaMoneyBillWave, FaCalendarAlt, FaMobileAlt, FaChartLine, FaHandshake } from "react-icons/fa";
import MyImage from '../../../assets/earning-figures-for-host.png';
export function Layout6() {
  // Define the features array
  const features = [
    {
      icon: <FaMoneyBillWave className="h-6 w-6 text-accent" />,
      title: "Passive Income",
      description: "Earn an average of $200 per month by sharing your EV charger when you're not using it."
    },
    {
      icon: <FaCalendarAlt className="h-6 w-6 text-accent" />,
      title: "Flexible Scheduling",
      description: "Set your own availability and control when drivers can access your charger."
      
    },
  
    // {
    //   icon: <FaShieldAlt className="h-6 w-6 text-accent" />,
    //   title: "Insurance Coverage",
    //   description: "Our platform provides comprehensive insurance for all hosts during charging sessions."
    // },
    {
      icon: <FaMobileAlt className="h-6 w-6 text-accent" />,
      title: "Easy Management",
      description: "Control everything from our intuitive mobile app - bookings, payments, and more."
    },
    {
      icon: <FaChartLine className="h-6 w-6 text-accent" />,
      title: "Performance Insights",
      description: "Track your earnings and usage patterns with detailed analytics."
    },
    {
      icon: <FaHandshake className="h-6 w-6 text-accent" />,
      title: "Community Support",
      description: "Join a network of hosts and share tips to maximize your earnings."
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay">
              Unlock Passive Income by Hosting EV Chargers at Your Home
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-black">
              As a host, you can earn an average of AUD 180 per month by renting
              out your EV charger. Join our growing community of over 30 members
              who joined our waitlist!
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl text-governor-bay">
                  Host Earnings
                </h6>
                <p>
                  Earn money effortlessly while helping EV owners access
                  charging solutions.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl text-governor-bay">
                  Host Testimonials
                </h6>
                <p>
                  "Hosting has been a fantastic way to supplement my income!" -
                  William, Host
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full bg-governor-bay/10 rounded-xl transform rotate-3"></div>
            <img
              src={MyImage}
              className="w-full rounded-xl object-cover shadow-xl relative z-10"
              alt="Home EV charging station with earnings visualization"
            />
            <div className="absolute -bottom-4 -right-4 p-3 bg-white rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-malachite flex items-center justify-center">
                  <FaMoneyBillWave className="size-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Earn Money</p>
                  <p className="text-xs text-french-gray">From Your Charger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 rounded-full bg-accent/10 p-3">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-french-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
