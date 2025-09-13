import React from "react";
import FooterLinks from "./FooterLinks";
import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer
      id="relume"
      className="border-t bg-background text-muted-foreground px-[5%] py-12 md:py-16"
    >
      <div className="container">
        <div className="grid gap-12 pb-12 md:grid-cols-2 md:gap-16 md:pb-16">
          <FooterLinks />
          <div className="flex flex-col gap-8">
            <NewsletterForm />
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col items-start border-t pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2025 ChargeNextDoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

