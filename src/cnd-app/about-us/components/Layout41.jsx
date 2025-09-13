import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "../../../components/ui/button";

export function Layout41() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-muted-foreground">Connect</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl text-foreground">
              Empowering Electric Vehicle Charging for Everyone
            </h2>
          </div>
          <div>
            <p className="md:text-md text-muted-foreground">
              Founded on the belief that charging should be accessible to all,
              we connect EV owners with hosts offering home chargers. Our
              mission is to create a sustainable future by making electric
              vehicle charging simple and convenient.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                onClick={() => (window.location.href = "/contact-us")}
                className="text-lg"
              >
                Learn More
              </Button>
              <Button
                variant="ghost"
                onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
                className="text-lg gap-1"
              >
                Sign Up
                <RxChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
