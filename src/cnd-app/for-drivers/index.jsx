"use client";

import React from "react";
import { Navbar12 } from "../home/components/Navbar12";
import { Header47 } from "./components/Header47";
import { Layout3 } from "./components/Layout3";
import { Layout12 } from "./components/Layout12";
import { Layout3_1 } from "./components/Layout3_1";
import { Cta1 } from "./components/Cta1";
import { Footer2 } from "../home/components/Footer2";

export default function ForDrivers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar12 />
      <Header47 />
      <Layout3 />
      <Layout12 />
      <Layout3_1 />
      <Cta1 />
      <Footer2 />
    </div>
  );
}
