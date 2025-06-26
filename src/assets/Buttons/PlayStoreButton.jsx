import React from 'react';
import playStoreLogo from './play-store-badge.png';

const PlayStoreButton = ({ href = "#", className = "" }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform duration-200 ease-in-out hover:scale-105 ${className}`}
    >
      <svg 
        width="200" 
        height="70" 
        viewBox="0 0 200 70" 
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-xl shadow-md"
      >
        {/* Background */}
        <rect width="200" height="70" rx="10" fill="#000000" />
        
        {/* Google Play Logo Image */}
        <image 
          href={playStoreLogo}
          x="15" 
          y="15" 
          width="40" 
          height="40"
        />
        
        {/* Text - Vertically Centered */}
        <g transform="translate(70, 29)">
          <text 
            x="0" 
            y="0" 
            fill="white" 
            fontSize="14" 
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
            fontWeight="300"
          >
            Join the Waitlist
          </text>
          <text 
            x="0" 
            y="22" 
            fill="white" 
            fontSize="22" 
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
            fontWeight="600"
          >
            Google Play
          </text>
        </g>
      </svg>
    </a>
  );
};

export default PlayStoreButton;
