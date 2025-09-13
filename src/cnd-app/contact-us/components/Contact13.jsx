import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

export function Contact13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-gradient-to-br from-mineral-green to-governor-bay text-white">
    {/* <section className=""> */}
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="mb-8 text-french-gray">
              We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-accent/20 p-3">
                  <FaEnvelope className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Email Address</h3>
                  <p className="text-sm text-french-gray">chargenextdoor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-8 text-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    className="bg-white/80"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    className="bg-white/80"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  className="bg-white/80"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows="4"
                  className="bg-white/80"
                  placeholder="How can we help you?"
                />
              </div>
              <Button
                className="w-full bg-accent hover:bg-malachite text-mineral-green font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
