"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

export function Contact13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-gradient-to-br from-mineral-green to-governor-bay text-white">
    {/* <section className=""> */}
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="mb-8 text-french-gray">
              We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-accent/20 p-3">
                  <FaEnvelope className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Email Address</h3>
                  <p className="text-sm text-french-gray">chargenextdoor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 shadow-xl">
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
                className="w-full bg-accent hover:bg-malachite text-mineral-green font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
