"use client";

import React, { useState } from "react";
import logo from "../../assets/cnd-logo.png";
import { Button } from "../ui/button";

export function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="ChargeNext Door Logo" className="h-12 w-auto" />
            <span className="font-bold text-xl hidden sm:block">ChargeNextDoor</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </a>
            <a href="/about-us" className="text-sm font-medium text-foreground hover:text-primary">
              About
            </a>
            <a href="/contact-us" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button>List your charger</Button>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center gap-1 w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-foreground transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          <div
            className={`lg:hidden fixed inset-0 z-40 bg-background/95 transition-opacity ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <a
                href="/"
                className="text-2xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-2xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact-us"
                className="text-2xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="mt-8 flex flex-col gap-2 w-full px-8">
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign in
                </Button>
                <Button onClick={() => setIsMobileMenuOpen(false)}>
                  List your charger
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
