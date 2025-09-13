"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { Header47 } from "./components/Header47";
import { Contact13 } from "./components/Contact13";
import { Contact2 } from "./components/Contact2";
import { Contact14 } from "./components/Contact14";
import { FaqSection } from "./components/FaqSection";
import { Footer2 } from "../../components/common/Footer2";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <br />
      <br />
      {/* <Header47 /> */}
      {/* <Contact2 /> */}
      {/* <Contact14 /> */}
      <FaqSection />
      <Contact13 />
      <Footer2 />
    </div>
  );
}
