import React from "react";
import MyImage from '../../../assets/person-using-smartphone-to-locate-chargers.jpg';
import MyImage2 from '../../../assets/person-using-smartphone-to-book-a-charger-in-car.jpeg';
import AutoPlayVideo from './autoplay';

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black relative overflow-hidden">
      {/* Background decorative elements - added governor bay tinge from right side */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-governor-bay/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-governor-bay/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-governor-bay/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-governor-bay/5 rounded-full blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 shadow-sm animate-fade-in mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Connect & Charge ⚡
              </div>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-governor-bay">
                Discover Your Nearest EV Charger Today
              </h2>
              {/* <p className="md:text-md text-black">
                Find EV chargers near you with ease. Our platform connects you
                to hosts offering their chargers for convenient access.
              </p> */}
            </div>
          </div>
          {/* <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-governor-bay/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={MyImage}
                  alt="Person using smartphone to locate chargers"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Easily Locate Chargers in Your Area
              </h3>
              <p className="text-black">Our user-friendly interface makes finding chargers simple.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-malachite/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={MyImage2}
                  alt="Woman using smartphone to book a charger"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Book Your Charger with Just a Click
              </h3>
              <p className="text-black">Secure your charging spot quickly and effortlessly.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center group">
              <div className="rb-6 mb-6 md:mb-8 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-governor-bay/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Secure payment"
                  className="rounded-xl h-60 w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-governor-bay">
                Safe and Reliable Payment Options
              </h3>
              <p className="text-black">Enjoy peace of mind with our secure payment system.</p>
            </div>
          </div> */}
        </div>

        {/* Second Section - Future of EV Charging with Video */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 mt-20">
          <div>
            <p className="mb-6 md:mb-8 md:text-md text-black/80">
              Be part of a community that's shaping the future of EV charging. 
              Our platform is designed to connect EV owners with hosts offering convenient and accessible 
              charging solutions right in your neighborhood.
            </p>
            
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {/* Early Launch Special */}
              <div>
                <h3 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl text-governor-bay">
                  🚀 Early Launch Special: Zero Platform Fees for 30 Days!
                </h3>
                <p className="text-black/80">
                  Join our early launch community and start earning passive income with zero platform fees. Be among the first to experience the revolutionary new way to charge your EV.
                </p>
              </div>

              {/* Why Join Us */}
              <div>
                <h3 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl text-governor-bay">
                  💡 Why Join Us?
                </h3>
                <ul className="text-black list-inside space-y-2">
                  <li>Stay Ahead of the Curve: Be the first to experience the future of EV charging.</li>
                  <li>Help Shape the Future: Provide feedback during the early stages and make your voice heard.</li>
                  <li>Exclusive Offers: Sign up today for special perks and benefits as we prepare to launch.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* iPhone Mockup with Video */}
          <div className="relative flex justify-center">
            {/* iPhone Frame */}
            <div className="relative">
              {/* iPhone outer frame with glassmorphism */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl backdrop-blur-lg border border-white/10">
                <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    <AutoPlayVideo />
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced Floating Glassmorphism Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-xl">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-xl">
              <span className="text-2xl">🔌</span>
            </div>
          </div>
        </div>

        {/* Combined Action Buttons */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:mt-20">
            <a 
              href="https://mailchi.mp/d3662d8474be/chargenextdoor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-300/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-700 hover:text-blue-800 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 px-8 py-4 text-lg shadow-lg group"
            >
              Sign Up
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="/contact-us"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-purple-700 text-lg bg-gradient-to-r from-white/10 to-blue-50/20 backdrop-blur-sm border border-blue-200/40 hover:border-purple-300/50 rounded-xl px-6 py-3 hover:bg-gradient-to-r hover:from-white/20 hover:to-purple-50/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold group"
            >
              Learn More
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Layout239;
