import React from "react";
import { Zap, PiggyBank, MapPin, Shield, Leaf, Users } from "lucide-react";
import { Card } from "../../../components/ui/card";

export function Layout3() {
  const benefits = [
    {
      icon: Zap,
      title: "Convenient Charging",
      description:
        "Access private chargers in residential areas, avoiding crowded public stations.",
    },
    {
      icon: PiggyBank,
      title: "Cost Savings",
      description: "Save up to 40% compared to commercial charging stations.",
    },
    {
      icon: MapPin,
      title: "Expanded Network",
      description:
        "Find charging options in areas with limited public infrastructure.",
    },
    {
      icon: Shield,
      title: "Verified Hosts",
      description: "All hosts are vetted and rated for your peace of mind.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "Support the sharing economy and reduce the need for new charging stations.",
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Connect with like-minded EV enthusiasts in your area.",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-muted/40">
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className=" text-governor-bay">Benefits for Drivers</span>
          </h2>
          <p className="mt-4 text-foreground">
            Discover why thousands of EV owners choose ChargeNextDoor
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="flex flex-col items-start p-6 transition-transform duration-300 hover:-translate-y-2 bg-muted/40"
              >
                <div className="mb-4 rounded-full bg-accent p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
