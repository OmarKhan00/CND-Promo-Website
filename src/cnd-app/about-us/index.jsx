"use client";

import React from "react";
import { MainNavbar } from "../../components/common/MainNavbar";
import { Header47 } from "./components/Header47";
import { Layout41 } from "./components/Layout41";
import { Layout369 } from "./components/Layout369";
import { Team8 } from "./components/Team8";
import { Gallery8 } from "./components/Gallery8";
import { Cta3 } from "./components/Cta3";
import { Footer2 } from "../../components/common/Footer2";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavbar />
      <br />
      <Header47 />
      {/* <Layout41 /> */}
      {/* <Layout369 /> */}
      <Team8 />
      <Cta3 />
      <Gallery8 />
      <Footer2 />
    </div>
  );
}
