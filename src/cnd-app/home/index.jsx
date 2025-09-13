"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { Header1 } from "./components/Header1";
import { Section2 } from "./components/section2";
import { Testimonial14 } from "./components/Testimonial14";
import { CallToActionHero } from "./components/CallToActionHero";
import { Cta20 } from "./components/Cta20";
import { Footer2 } from "../../components/common/Footer2";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <br/>
      <Header1 />
      {/* <Layout12 /> */}
      <Section2 />
      {/* <Layout246 /> */}
      {/* <Layout26 /> */}
      <Testimonial14 />
      {/* <Layout239 /> */}
      <CallToActionHero />
      <Cta20 />
      <Footer2 />
    </div>
  );
}
