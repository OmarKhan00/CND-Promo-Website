import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export function Team4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl ">
              Meet Our Team
            </h2>
            <p className="md:text-md text-muted-foreground">
              The passionate individuals behind ChargeNextDoor who are dedicated to revolutionizing EV charging.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="rb-6 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Kyle Smith"
                className="h-64 w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold md:text-2xl">Kyle Smith</h3>
            <p className="mb-4 text-muted-foreground">CEO & Co-Founder</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rb-6 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sarah Johnson"
                className="h-64 w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold md:text-2xl">Sarah Johnson</h3>
            <p className="mb-4 text-muted-foreground">CTO & Co-Founder</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rb-6 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="David Chen"
                className="h-64 w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold md:text-2xl">David Chen</h3>
            <p className="mb-4 text-muted-foreground">Head of Product</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rb-6 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Emily Rodriguez"
                className="h-64 w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold md:text-2xl">Emily Rodriguez</h3>
            <p className="mb-4 text-muted-foreground">Marketing Director</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 