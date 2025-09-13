import React from "react";
import FooterLinks from "./FooterLinks";
import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer
      id="relume"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white px-[5%] py-12 md:py-18 lg:py-20 overflow-hidden"
    >
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <FooterLinks />
          <div className="flex flex-col p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <NewsletterForm />
            <SocialIcons />
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0 text-white/80">© 2025 ChargeNextDoor. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

