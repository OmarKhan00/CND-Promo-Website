import React from "react";
import CarComingInImage from '../../../assets/car-coming-in.png';

export function Layout3Alt() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay">
              Experience Hassle-Free Charging: Your Home Away from Home for EVs
            </h1>
            <p className="md:text-md text-black">
              Say goodbye to the stress of crowded public charging stations.
              With our service, you can easily book a home charger, ensuring a
              secure and convenient charging experience tailored to your needs.
            </p>
          </div>
          <div>
            <img
              src={CarComingInImage}
              className="w-full rounded-image object-cover"
              alt="EV approaching driveway charger"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
