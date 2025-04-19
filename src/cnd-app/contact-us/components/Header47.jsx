"use client";

import { Button, Input, Textarea } from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';


export function Header47() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    const serviceID = 'service_uknx6le';     // replace with your EmailJS service ID
    const templateID = 'template_xqf7emo';   // replace with your EmailJS template ID
    const publicKey = 'evpJWA4KukxGbiV00';   // replace with your EmailJS public key
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Something went wrong. Please try again.");
      });
  };
  

  useEffect(() => {
    // Add fade-in animation to elements when component mounts
    const heading = document.querySelector('.header-heading');
    const description = document.querySelector('.header-description');
    const form = document.querySelector('.contact-form');
    
    if (heading) heading.classList.add('slide-in-left');
    if (description) description.classList.add('fade-in');
    if (form) form.classList.add('slide-in-right');
  }, []);

  return (
    <section id="chargeNDrive" className="bg-gradient-to-br from-governor-bay to-mineral-green text-white px-[5%] py-16 md:py-24 lg:py-28 pt-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-accent">Get in Touch</p>
            <h1 className="header-heading mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Contact Us
            </h1>
            <p className="header-description md:text-md text-french-gray">
              Have questions about our platform? Want to learn more about becoming a host or using our service? 
              We're here to help! Fill out the form and our team will get back to you as soon as possible.
            </p>
            <div className="mt-6 flex flex-col gap-4 md:mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-governor-bay">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p>ChargeNextDoor@gmail.com</p>
              </div>
              {/* <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-governor-bay">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p>+1 (555) 123-4567</p>
              </div> */}
            </div>
          </div>
          <div id="contact-form" className="contact-form glass p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/50"
              />
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/50"
              />
              <Textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/50 min-h-32"
              />
              <Button 
                title="Send Message"
                type="submit"
                className="bg-accent hover:bg-malachite text-governor-bay font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
