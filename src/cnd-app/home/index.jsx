import React from "react";
import { MainNavbar } from "components/common/MainNavbar";
import { Header1 } from "./components/Header1";
import { Section2 } from "./components/section2";
import { Testimonial14 } from "./components/Testimonial14";
import { CallToActionHero } from "./components/CallToActionHero";
import { Cta20 } from "./components/Cta20";
import Footer from "components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <div className="mt-8">
        <Header1 />
      </div>
      <Section2 />
      <Testimonial14 />
      <CallToActionHero />
      <Cta20 />
      <Footer />
    </div>
  );
}
