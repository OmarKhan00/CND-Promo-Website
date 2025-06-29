"use client";

import React from "react";
import { Navbar12 } from "../home/components/Navbar12";
import { Header47 } from "./components/Header47";
import { Layout369 } from "./components/Layout369";
import { Team8 } from "./components/Team8";
import { Gallery8 } from "./components/Gallery8";
import { Footer2 } from "../home/components/Footer2";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar12 />
      <Header47 />
      <Layout369 />
      <Team8 />
      <Gallery8 />
      <Footer2 />
    </div>
  );
} 