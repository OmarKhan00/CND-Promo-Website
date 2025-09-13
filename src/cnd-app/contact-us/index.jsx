"use client";

import React from "react";
import { Navbar12 } from "../../components/common/Navbar12";
import { Header47 } from "./components/Header47";
import { Contact13 } from "./components/Contact13";
import { Contact2 } from "./components/Contact2";
import { Contact14 } from "./components/Contact14";
import { Faq4 } from "./components/Faq4";
import { Footer2 } from "../../components/common/Footer2";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar12 />
      <br />
      <br />
      {/* <Header47 /> */}
      {/* <Contact2 /> */}
      {/* <Contact14 /> */}
      <Faq4 />
      <Contact13 />
      <Footer2 />
    </div>
  );
}
