"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export function Contact13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-gradient-to-br from-mineral-green to-governor-bay text-white">
    {/* <section className=""> */}
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center h-full text-left">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="mb-8 text-french-gray text-base md:text-lg">
              We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                <div className="rounded-full bg-accent/20 p-3 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-white">Location</h3>
                  <p className="text-sm text-french-gray">Melbourne (Floating Office)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                <div className="rounded-full bg-accent/20 p-3 flex items-center justify-center">
                  <FaPhone className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-white">Phone</h3>
                  <p className="text-sm text-french-gray">(Coming Soon)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                <div className="rounded-full bg-accent/20 p-3 flex items-center justify-center">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-white">Email</h3>
                  <p className="text-sm text-french-gray">contact@chargenextdoor.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 shadow-xl flex flex-col justify-center">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-lg border border-french-gray/30 bg-transparent p-3 text-white placeholder-french-gray/50 focus:border-accent focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-lg border border-french-gray/30 bg-transparent p-3 text-white placeholder-french-gray/50 focus:border-accent focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-french-gray/30 bg-transparent p-3 text-white placeholder-french-gray/50 focus:border-accent focus:outline-none"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full rounded-lg border border-french-gray/30 bg-transparent p-3 text-white placeholder-french-gray/50 focus:border-accent focus:outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button
                title="Send Message"
                className="w-full bg-accent/90 hover:bg-accent text-white font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 backdrop-blur-md border border-white/20 btn-pulse"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
