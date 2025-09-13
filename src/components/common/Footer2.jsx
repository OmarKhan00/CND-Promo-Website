"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";


import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
  BiCar,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/CND_Logo.png";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();
  return (
    <footer id="relume" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white px-[5%] py-12 md:py-18 lg:py-20 overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
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
                {/* <li className="py-2 text-sm">
                  <a href="/for-hosts" className="flex items-center gap-3 hover:text-accent transition-colors">
                    For Hosts
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="/for-drivers" className="flex items-center gap-3 hover:text-accent transition-colors">
                    For Drivers
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h2 className="mb-3 font-semibold md:mb-4 text-emerald-300">Resources</h2>
              <ul>
                {/* <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 hover:text-accent transition-colors">
                    Blog
                  </a>
                </li> */}
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
                  {/* <a href="#" className="flex items-center gap-3 hover:text-accent transition-colors">
                    Privacy Policy
                  </a> */}
                  <a href="/privacy-policy" className=" flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                {/* <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 hover:text-accent transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 hover:text-accent transition-colors">
                    Cookie Policy
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex flex-col p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {/* <h1 className="mb-3 font-semibold md:mb-4">Subscribe</h1>
            <p className="mb-3 text-sm md:mb-4">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button 
                  title="Subscribe" 
                  variant="secondary" 
                  size="sm"
                  className="bg-accent hover:bg-malachite text-mineral-green font-bold rounded-lg transition-all duration-300"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div> */}
            <div className="flex flex-col items-center text-center">
                                                        <h1 className="size-15 mb-3  text-lg font-semibold md:text-xl md:mb-4 text-emerald-300"
                                                        style={{ fontSize: "30px" }}>Find us on socials</h1>
                                                                                  <div className="flex gap-6">
                                                                                    <a href="https://www.instagram.com/chargenextdoor?igsh=MWg2enY2YmN5NjYybQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group">
                                                                                      <BiLogoInstagram className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"style={{ fontSize: "60px" }} />
                                                                                    </a>
                                                                                    <a href="https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="group">
                                                                                      <BiLogoFacebookCircle className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ fontSize: "60px" }}/>
                                                                                    </a>
                                                                                    <a href="https://www.linkedin.com/company/chargenextdoor/" target="_blank" rel="noopener noreferrer" className="group">
                                                                                      <BiLogoLinkedinSquare className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ fontSize: "60px" }}/>
                                                                                    </a>
                                                                                  </div>
              </div>
              
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0 text-white/80">
                © 2025 ChargeNextDoor. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            {/* <a href="https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr" className="hover:scale-110 transition-transform duration-300">
              <BiLogoFacebookCircle className="size-6 text-french-gray hover:text-accent" />
            </a>
            <a href="https://www.instagram.com/chargenextdoor?igsh=MWg2enY2YmN5NjYybQ%3D%3D&utm_source=qr" className="hover:scale-110 transition-transform duration-300">
              <BiLogoInstagram className="size-6 text-french-gray hover:text-accent" />
            </a> */}
            {/* <a href="#" className="hover:scale-110 transition-transform duration-300">
              <FaXTwitter className="size-6 p-0.5 text-french-gray hover:text-accent" />
            </a> */}
            {/* <a href="https://www.linkedin.com/company/chargenextdoor/" className="hover:scale-110 transition-transform duration-300">
              <BiLogoLinkedinSquare className="size-6 text-french-gray hover:text-accent" />
            </a> */}
            {/* <a href="#" className="hover:scale-110 transition-transform duration-300">
              <BiLogoYoutube className="size-6 text-french-gray hover:text-accent" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
