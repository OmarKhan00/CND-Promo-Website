"use client";

import React, { useState } from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import emailjs from 'emailjs-com';

export function Header47() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceID = 'service_uknx6le';
    const templateID = 'template_xqf7emo';
    const publicKey = 'evpJWA4KukxGbiV00';
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
  
    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 pt-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          {/* Text Content - LEFT SIDE */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200/50 rounded-full text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Get in Touch ✉️
            </div>
            
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions about our platform? Want to learn more about becoming a host or using our service? 
              We're here to help! Fill out the form and our team will get back to you as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="size-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <FaEnvelope className="size-5 text-emerald-600" />
                </div>
                <div>
                  <h6 className="font-bold text-gray-800">Email Us</h6>
                  <p className="text-gray-600">ChargeNextDoor@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - RIGHT SIDE */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm border border-white/30 shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-4 text-gray-800 placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-4 text-gray-800 placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full rounded-xl border border-gray-200/50 bg-white/60 backdrop-blur-sm p-4 text-gray-800 placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 px-8 py-4 text-lg shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
                    <FaCheckCircle className="size-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
