"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar12() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          {/* Logo - Increased to h-16 */}
          <a href="/" className="flex items-center gap-2">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="ChargeNext Door Logo" className="h-16 w-auto" />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, calc(100vh - 64px))" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-auto px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <nav className="lg:flex lg:items-center">
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
            >
              Home Chargers
            </a>
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
            >
              Host Connect
            </a>
            <a
              href="#"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
            >
              EV Solutions
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>More Options</span>
                <motion.span
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      visibility: "visible",
                      opacity: "var(--opacity-open, 100%)",
                      y: 0,
                      display: "block",
                    },
                    close: {
                      visibility: "hidden",
                      opacity: "var(--opacity-close, 0)",
                      y: "var(--y-close, 0%)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bg-background-primary py-4 lg:absolute lg:right-[186px] lg:z-50 lg:max-w-[640px] lg:border lg:border-border-primary lg:p-6 lg:[--y-close:25%]"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div>
                      <h4 className="mb-3 text-sm leading-[1.3] font-semibold md:mb-4">
                        Explore Our Network
                      </h4>
                      <div className="flex flex-col gap-2 md:gap-4">
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 1"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Join Us</p>
                            <p className="hidden text-sm md:block">
                              Find charging stations near you today!
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 2"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Become a Host</p>
                            <p className="hidden text-sm md:block">
                              Share your charger and earn money!
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 3"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">EV Owner</p>
                            <p className="hidden text-sm md:block">
                              Access convenient charging options easily.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 4"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Support Center</p>
                            <p className="hidden text-sm md:block">
                              Get help with your charging needs.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm leading-[1.3] font-semibold md:mb-4">
                        Additional Resources
                      </h4>
                      <div className="flex flex-col gap-2 md:gap-4">
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 1"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Blog Insights</p>
                            <p className="hidden text-sm md:block">
                              Stay updated with the latest trends.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 2"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Community Forum</p>
                            <p className="hidden text-sm md:block">
                              Connect with other EV enthusiasts.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 3"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">User Guide</p>
                            <p className="hidden text-sm md:block">
                              Learn how to use our platform.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="my-1 flex items-start gap-x-3 text-md lg:text-base"
                        >
                          <img
                            src="relume-icon.svg"
                            alt="Sub menu link 4"
                            className="size-6"
                          />
                          <div className="flex grow flex-col">
                            <p className="font-semibold">Contact Us</p>
                            <p className="hidden text-sm md:block">
                              We're here to assist you anytime.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </nav>
          <div className="my-6 flex flex-col gap-4 lg:my-0 lg:ml-4 lg:flex-row lg:items-center">
            <Button title="Sign Up" variant="secondary" size="sm">
              Sign Up
            </Button>
            <Button title="Learn More" size="sm">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
