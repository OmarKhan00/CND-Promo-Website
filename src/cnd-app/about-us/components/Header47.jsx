import React from "react";
import { FaBolt, FaUsers, FaLeaf } from "react-icons/fa";
import { Card, CardContent } from "../../../components/ui/card";
import MyImage from '../../../assets/person-charging-ev-2.jpg';

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 pt-32 relative overflow-hidden bg-muted">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-muted rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          {/* Text Content - LEFT SIDE */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-muted border rounded-full text-sm font-medium text-foreground shadow-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Our Story ⚡
            </div>
            
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-foreground">
              Connecting EV Owners with Local Hosts
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ChargeNextDoor was founded with a simple mission: to make EV charging more accessible,
              affordable, and community-driven. We believe in the power of sharing resources to
              create a more sustainable future.
            </p>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="mb-3 flex justify-center">
                    <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <FaBolt className="size-5 text-emerald-600" />
                    </div>
                  </div>
                  <h6 className="text-sm font-bold text-foreground mb-1">Innovation</h6>
                  <p className="text-xs text-muted-foreground">Leading EV charging solutions</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="mb-3 flex justify-center">
                    <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <FaUsers className="size-5 text-blue-600" />
                    </div>
                  </div>
                  <h6 className="text-sm font-bold text-foreground mb-1">Community</h6>
                  <p className="text-xs text-muted-foreground">Connecting neighbors</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="mb-3 flex justify-center">
                    <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <FaLeaf className="size-5 text-green-600" />
                    </div>
                  </div>
                  <h6 className="text-sm font-bold text-foreground mb-1">Sustainability</h6>
                  <p className="text-xs text-muted-foreground">Green future together</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image - RIGHT SIDE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={MyImage}
                className="w-full max-w-lg rounded-2xl object-cover shadow-2xl relative z-10"
                alt="Electric vehicle charging"
              />
              
              {/* Floating glassmorphism elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-muted backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '3s'}}>
                <span className="text-2xl opacity-80">⚡</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-muted backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '4s'}}>
                <span className="text-xl opacity-80">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 