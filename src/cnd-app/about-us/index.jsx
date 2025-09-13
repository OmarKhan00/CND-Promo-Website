"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { Header47 } from "./components/Header47";
import { Team8 } from "./components/Team8";
import { Gallery8 } from "./components/Gallery8";
import { Cta3 } from "./components/Cta3";
import Footer from "../../components/footer/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <div className="mt-8 space-y-8">
        <Header47 />
        <Team8 />
        <Cta3 />
        <Gallery8 />
        <Footer />
      </div>
    </div>
  );
}
