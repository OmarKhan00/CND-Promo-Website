"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { Contact13 } from "./components/Contact13";
import { FaqSection } from "./components/FaqSection";
import Footer from "../../components/footer/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <div className="mt-8">
        <FaqSection />
      </div>
      <div className="mt-8">
        <Contact13 />
      </div>
      <Footer />
    </div>
  );
}
