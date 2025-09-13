import React, { useState } from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 pt-32 bg-gray-50">
      <div className="container">
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
          <div>
            <Card className="p-8 shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </Button>

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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
