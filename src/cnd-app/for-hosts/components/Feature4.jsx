import React from "react";
import { FaShieldAlt, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

export function Feature4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Benefits for Hosts
            </h2>
            <p className="md:text-md text-french-gray">
              Discover the advantages of sharing your EV charger with our platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10">
            <div className="mb-5 md:mb-6">
              <div className="size-16 rounded-full bg-governor-bay/15 flex items-center justify-center">
                <FaMoneyBillWave className="size-8 text-governor-bay" />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
              Earn Extra Income
            </h3>
            <p className="text-french-gray">
              Turn your unused EV charger into a source of income. Set your own rates and earn money when EV owners use your charging station.
            </p>
          </div>
          <div className="flex flex-col items-start p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-french-gray/10">
            <div className="mb-5 md:mb-6">
              <div className="size-16 rounded-full bg-malachite/15 flex items-center justify-center">
                <FaCalendarAlt className="size-8 text-malachite" />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
              Flexible Scheduling
            </h3>
            <p className="text-black">
              You control when your charger is available. Set your schedule to accommodate your lifestyle and make your charger available only when it's convenient for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 