"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { HostHeroHeader } from "./components/HostHeroHeader";
import { Layout6 } from "./components/Layout6";
import { Layout242 } from "./components/Layout242";
import { Layout27 } from "./components/Layout27";
import { Testimonial6 } from "./components/Testimonial6";
import { WaitlistCTA } from "./components/WaitlistCTA";
import { Footer2 } from "../../components/common/Footer2";

export default function ForHosts() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <HostHeroHeader />
      <Layout6 />
      <Layout242 />
      <Layout27 />
      <Testimonial6 />
      <WaitlistCTA />
      <Footer2 />
    </div>
  );
}
