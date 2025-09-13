import React from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-muted/40">
      <div className="container flex justify-center">
        <Card className="flex flex-col items-center text-center max-w-4xl p-8 bg-muted/40">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
            Charge Smart, Save Big
          </h2>
          <p className="md:text-md text-foreground">
            We’re launching soon — find affordable home chargers near you and charge your EV with ease and confidence
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
            <Button
              onClick={() =>
                window.open(
                  "https://mailchi.mp/d3662d8474be/chargenextdoor",
                  "_blank"
                )
              }
            >
              Join Waitlist
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}


