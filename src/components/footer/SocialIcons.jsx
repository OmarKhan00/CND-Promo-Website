import React from "react";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default function SocialIcons() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1
        className="size-15 mb-3  text-lg font-semibold md:text-xl md:mb-4 text-emerald-300"
        style={{ fontSize: "30px" }}
      >
        Find us on socials
      </h1>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/chargenextdoor?igsh=MWg2enY2YmN5NjYybQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <BiLogoInstagram
            className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{ fontSize: "60px" }}
          />
        </a>
        <a
          href="https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <BiLogoFacebookCircle
            className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{ fontSize: "60px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/chargenextdoor/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <BiLogoLinkedinSquare
            className="text-white/70 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            style={{ fontSize: "60px" }}
          />
        </a>
      </div>
    </div>
  );
}

