import React from "react";
import { FaBolt, FaMoneyBillWave, FaMapMarkedAlt, FaShieldAlt, FaLeaf, FaUserFriends } from "react-icons/fa";

export function Layout3() {
  // Define the benefits array
  const benefits = [
    {
      icon: <FaBolt className="h-6 w-6" />,
      title: "Convenient Charging",
      description: "Access private chargers in residential areas, avoiding crowded public stations."
    },
    {
      icon: <FaMoneyBillWave className="h-6 w-6" />,
      title: "Cost Savings",
      description: "Save up to 40% compared to commercial charging stations."
    },
    {
      icon: <FaMapMarkedAlt className="h-6 w-6" />,
      title: "Expanded Network",
      description: "Find charging options in areas with limited public infrastructure."
    },
    {
      icon: <FaShieldAlt className="h-6 w-6" />,
      title: "Verified Hosts",
      description: "All hosts are vetted and rated for your peace of mind."
    },
    {
      icon: <FaLeaf className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Support the sharing economy and reduce the need for new charging stations."
    },
    {
      icon: <FaUserFriends className="h-6 w-6" />,
      title: "Community Connection",
      description: "Connect with like-minded EV enthusiasts in your area."
    }
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-white-subtle text-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className=" text-governor-bay">Benefits for Drivers</span>
          </h2>
          <p className="mt-4 text-black">
            Discover why thousands of EV owners choose ChargeNextDoor
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 rounded-full bg-accent p-3 ">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">{benefit.title}</h3>
              <p className="text-sm text-french-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
