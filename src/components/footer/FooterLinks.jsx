import React from "react";
import { BiCar } from "react-icons/bi";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      <a href="/" className="col-span-2 flex items-center gap-2 sm:col-span-1">
        <BiCar className="h-6 w-6" />
        <span className="font-bold text-foreground">CND</span>
      </a>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-foreground">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="/" className="hover:text-foreground">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us" className="hover:text-foreground">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-foreground">Resources</h2>
        <ul className="space-y-2">
          <li>
            <a href="/contact-us" className="hover:text-foreground">
              FAQ
            </a>
          </li>
          <li>
            <a href="/contact-us#contact-form" className="hover:text-foreground">
              Support
            </a>
          </li>
          <li>
            <a href="/contact-us#contact-form" className="hover:text-foreground">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-foreground">Legal</h2>
        <ul className="space-y-2">
          <li>
            <a href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

