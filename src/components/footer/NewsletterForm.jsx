import React, { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };

  return (
    <>
      <h1 className="mb-3 font-semibold md:mb-4">Subscribe</h1>
      <p className="mb-3 text-sm md:mb-4">
        Join our newsletter for the latest updates and exclusive offers.
      </p>
      <div className="w-full max-w-md">
        <form
          className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
          onSubmit={handleSubmit}
        >
          <Input
            id="email"
            type="email"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            title="Subscribe"
            variant="secondary"
            size="sm"
            className="bg-accent hover:bg-malachite text-mineral-green font-bold rounded-lg transition-all duration-300"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-xs">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </>
  );
}

