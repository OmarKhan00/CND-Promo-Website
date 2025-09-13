"use client";

import React from "react";
import { Navbar12 } from "../../components/common/Navbar12";
import { Header1 } from "./components/Header1";
import { Footer2 } from "../../components/common/Footer2";
import { Cta7 } from "./components/Cta7";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar12 />
      <Header1 />
      {/* Add other components here */}
      <Cta7 />
      <Footer2 />
    </div>
  );
} 