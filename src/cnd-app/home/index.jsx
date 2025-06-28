"use client";

import React from "react";
import { Navbar12 } from "./components/Navbar12";
import { Header1 } from "./components/Header1";
import { Layout239 } from "./components/Layout239";
import { Layout12 } from "./components/Layout12";
import { Layout246 } from "./components/Layout246";
import { Layout26 } from "./components/Layout26";
import { Testimonial14 } from "./components/Testimonial14";
import { Cta7 } from "./components/Cta7";
import { Cta20 } from "./components/Cta20";
import { Footer2 } from "./components/Footer2";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar12 />
      <Header1 />
      
      <Layout12 />
      {/* <Layout246 /> */}
      {/* <Layout26 /> */}
      <Testimonial14 />
      <Layout239 />
      <Cta7 />
      <Cta20 />
      <Footer2 />
    </div>
  );
}
