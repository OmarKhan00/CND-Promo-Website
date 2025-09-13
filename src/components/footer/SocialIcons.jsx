import React from "react";
import {
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

export default function SocialIcons() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-lg font-semibold text-foreground">Find us on socials</h1>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/chargenextdoor?igsh=MWg2enY2YmN5NjYybQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <BiLogoInstagram className="h-10 w-10" />
        </a>
        <a
          href="https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <BiLogoFacebookCircle className="h-10 w-10" />
        </a>
        <a
          href="https://www.linkedin.com/company/chargenextdoor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <BiLogoLinkedinSquare className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}

