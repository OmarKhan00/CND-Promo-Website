"use client";

import React from "react";
import { Navbar12 } from "../../components/common/Navbar12";
import { Header1 } from "./components/Header1";
import { Section2 } from "./components/section2";
import { Testimonial14 } from "./components/Testimonial14";
import { Cta7 } from "./components/Cta7";
import { Cta20 } from "./components/Cta20";
import { Footer2 } from "../../components/common/Footer2";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar12 />
      <br/>
      <Header1 />
      {/* <Layout12 /> */}
      <Section2 />
      {/* <Layout246 /> */}
      {/* <Layout26 /> */}
      <Testimonial14 />
      {/* <Layout239 /> */}
      <Cta7 />
      <Cta20 />
      <Footer2 />
    </div>
  );
}
