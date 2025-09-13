"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { SmartChargingHeader } from "./components/SmartChargingHeader";
import { Layout3 } from "./components/Layout3";
import { Layout12 } from "./components/Layout12";
import { Layout3_1 } from "./components/Layout3_1";
import { Cta1 } from "./components/Cta1";
import { Footer2 } from "../../components/common/Footer2";

export default function ForDrivers() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <SmartChargingHeader />
      <Layout3 />
      <Layout12 />
      <Layout3_1 />
      <Cta1 />
      <Footer2 />
    </div>
  );
}
