import React, { useEffect } from "react";
import { Button } from "../../../components/ui/button";
import AppStoreButton from "../../../assets/Buttons/AppStoreButton";

export function SmartChargingHeader() {
  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector('.header-heading');
    const description = document.querySelector('.header-description');
    const buttons = document.querySelector('.header-buttons');
    
    if (heading) heading.classList.add('slide-in-left');
    if (description) description.classList.add('fade-in');
    if (buttons) buttons.classList.add('fade-in');
  }, []);

  return (
    <section
      id="chargeNDrive"
      className="bg-muted/40 px-[5%] py-16 pt-32 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-primary md:mb-4">Savings</p>
            <h1 className="header-heading text-6xl font-bold md:text-7xl lg:text-8xl">
              Charge Smartly Today
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="header-description text-muted-foreground md:text-md">
              Discover the ease of charging your electric vehicle at home with
              our innovative platform. Enjoy significant savings, enhanced
              security, and unparalleled convenience by using a host's charger
              instead of costly public options.
            </p>
            
            {/* App Store Download Button */}
            <div className="mt-6 mb-4">
              <AppStoreButton 
                href="https://apps.apple.com/your-app-store-link" 
                className="inline-block"
              />
            </div>
            
            <div className="header-buttons mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
              <Button
                title="Learn More"
                className="font-semibold"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="ghost"
                className="font-semibold"
                onClick={() =>
                  window.open(
                    "https://mailchi.mp/d3662d8474be/chargenextdoor",
                    "_blank"
                  )
                }
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
