import React from "react";
import { BiCar } from "react-icons/bi";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
      <a
        href="/"
        className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto group"
      >
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-fit">
          <BiCar className="text-emerald-400 text-3xl group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
          <span className="text-lg font-bold text-white whitespace-nowrap">CND</span>
        </div>
      </a>
      <div className="flex flex-col items-start justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h2 className="mb-3 font-semibold md:mb-4 text-emerald-300">Quick Links</h2>
        <ul>
          <li className="py-2 text-sm">
            <a href="/" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              Home
            </a>
          </li>
          <li className="py-2 text-sm">
            <a href="/about-us" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h2 className="mb-3 font-semibold md:mb-4 text-emerald-300">Resources</h2>
        <ul>
          <li className="py-2 text-sm">
            <a href="/contact-us" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              FAQ
            </a>
          </li>
          <li className="py-2 text-sm">
            <a href="/contact-us#contact-form" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              Support
            </a>
          </li>
          <li className="py-2 text-sm">
            <a href="/contact-us#contact-form" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
        <h2 className="mb-3 font-semibold md:mb-4 text-emerald-300">Legal</h2>
        <ul>
          <li className="py-2 text-sm">
            <a href="/privacy-policy" className="flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

