import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaUserPlus, FaMapMarkedAlt, FaCreditCard } from "react-icons/fa";
import SignUpButton from '../../../assets/Buttons/SignUpButton';

export function Layout246() {
  return (
    // bg-dark-turquoise/90 
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-dark-turquoise/90 text-white relative overflow-hidden">
      {/* Background decorative elements - added decorative tinges */}
      <div className="absolute -top-20 left-20 w-96 h-96 bg-governor-bay/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-malachite/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-10 w-40 h-40 bg-governor-bay/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-malachite/10 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-governor-bay">
              Discover how easy it is to charge your EV with our platform.
            </h2>
          </div>
          <div>
            <p className="md:text-md text-mineral-green font-medium">
              Our platform connects EV owners with hosts who have charging
              stations available. Sign up to browse local charging options and
              book your spot in just a few clicks. Enjoy seamless payment
              processing and charging access whenever you need it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <div className="size-12 rounded-full bg-governor-bay/20 flex items-center justify-center">
                <FaUserPlus className="size-6 text-grey" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-governor-bay">
              Create your account to get started with our platform.
            </h3>
            <p className="text-mineral-green font-medium">Get started by creating your account today.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                          
            <Button
              iconRight={<RxChevronRight />}
              variant="link"
              size="link"
              onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              className="text-governor-bay hover:text-malachite"
            >
              Sign Up
            </Button>
                          
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <div className="size-12 rounded-full bg-governor-bay/20 flex items-center justify-center">
                <FaMapMarkedAlt className="size-6 text-grey" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-governor-bay">
              Find the perfect charging spot for your electric vehicle.
            </h3>
            <p className="text-mineral-green font-medium">
              Browse available chargers and select the one that fits your needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {/* <Button iconRight={<RxChevronRight />} variant="link" size="link" className="text-mineral-green hover:text-governor-bay">
                Learn More
              </Button> */}
                  <a
                href="/contact-us" // or any path you want to link to
                className="text-mineral-green hover:text-governor-bay "
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <div className="size-12 rounded-full bg-governor-bay/20 flex items-center justify-center">
                <FaCreditCard className="size-6 text-grey" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl text-governor-bay">
              Secure payment options for a hassle-free charging experience.
            </h3>
            <p className="text-mineral-green font-medium">Complete your booking with our safe and easy payment methods.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} 
              variant="link" 
              size="link" 
              className="text-governor-bay hover:text-mineral-green"
              onClick={() => window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank")}
              
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
