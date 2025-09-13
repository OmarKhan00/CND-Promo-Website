import React from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export function WaitlistCTA() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-muted/40">
      <div className="container flex flex-col items-center justify-center text-center">
        <Card className="w-full max-w-lg p-8 bg-muted/40">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Unlock Passive Income - Join the Waitlist
          </h2>
          <p className="md:text-md text-foreground">
            Be among the first to earn by sharing your EV charger with eager drivers.
            Reserve your spot and start hosting when we launch!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
            <Button
              className="animate-pulse bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/au/app/chargenextdoor/",
                  "_blank"
                )
              }
            >
              (Apple) Download
            </Button>
            <Button
              className="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                window.open(
                  "https://mailchi.mp/d3662d8474be/chargenextdoor#SignupForm_0",
                  "_blank"
                )
              }
            >
              (Android) Waitlist
            </Button>
            <Button
              variant="ghost"
              className="bg-governor-bay hover:bg-malachite text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
