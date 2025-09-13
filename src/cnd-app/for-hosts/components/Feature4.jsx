import React from "react";
import { Wallet, Calendar } from "lucide-react";
import { Card } from "../../../components/ui/card";

export function Feature4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-muted/40">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Benefits for Hosts
            </h2>
            <p className="md:text-md text-muted-foreground">
              Discover the advantages of sharing your EV charger with our platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="flex flex-col items-start p-8 bg-muted/40">
            <div className="mb-5 md:mb-6">
              <div className="size-16 rounded-full bg-governor-bay/15 flex items-center justify-center">
                <Wallet className="size-8 text-governor-bay" />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
              Earn Extra Income
            </h3>
            <p className="text-muted-foreground">
              Turn your unused EV charger into a source of income. Set your own rates and earn money when EV owners use your charging station.
            </p>
          </Card>
          <Card className="flex flex-col items-start p-8 bg-muted/40">
            <div className="mb-5 md:mb-6">
              <div className="size-16 rounded-full bg-malachite/15 flex items-center justify-center">
                <Calendar className="size-8 text-malachite" />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
              Flexible Scheduling
            </h3>
            <p className="text-foreground">
              You control when your charger is available. Set your schedule to accommodate your lifestyle and make your charger available only when it's convenient for you.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
