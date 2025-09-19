import React from "react";
import { MainNavbar } from "components/common/MainNavbar";
import { SmartChargingHeader } from "./components/SmartChargingHeader";
import { Layout3 } from "./components/Layout3";
import { DriverBenefits } from "./components/DriverBenefits";
import { Layout3Alt } from "./components/Layout3Alt";
import { Cta1 } from "./components/Cta1";
import Footer from "components/footer/Footer";

export default function ForDrivers() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <SmartChargingHeader />
      <Layout3 />
  <DriverBenefits />
  <Layout3Alt />
      <Cta1 />
      <Footer />
    </div>
  );
}
