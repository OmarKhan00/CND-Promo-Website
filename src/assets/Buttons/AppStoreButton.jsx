import React from 'react';
import appleLogo from './app-store-badge.png';

const AppStoreButton = ({ href = "#", className = "" }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-block transition-all duration-300 ease-out hover:scale-105 ${className}`}
    >
      <div className="relative overflow-hidden">
        <svg 
          width="200" 
          height="70" 
          viewBox="0 0 200 70" 
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
        >
          {/* Enhanced Background with Gradient */}
          <defs>
            <linearGradient id="appStoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="200" height="70" rx="16" fill="url(#appStoreGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Subtle shine effect */}
          <rect width="200" height="70" rx="16" fill="url(#shine)" opacity="0.1" />
          <defs>
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Apple Logo Image */}
          <image 
            href={appleLogo}
            x="12" 
            y="12" 
            width="46" 
            height="46"
            filter="url(#glow)"
          />
          
          {/* Enhanced Text */}
          <g transform="translate(70, 28)">
            <text 
              x="0" 
              y="0" 
              fill="rgba(255,255,255,0.9)" 
              fontSize="13" 
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
              fontWeight="400"
              letterSpacing="0.5px"
            >
              Download on the
            </text>
            <text 
              x="0" 
              y="22" 
              fill="white" 
              fontSize="22" 
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
              fontWeight="600"
              letterSpacing="0.5px"
            >
              App Store
            </text>
          </g>

          {/* Hover effect overlay */}
          <rect 
            width="200" 
            height="70" 
            rx="16" 
            fill="rgba(255,255,255,0.05)" 
            opacity="0"
            className="group-hover:opacity-100 transition-opacity duration-300"
          />
        </svg>
      </div>
    </a>
  );
};

export default AppStoreButton;
