// components/SignUpButton.jsx
import React from 'react';
import { Button } from "@relume_io/relume-ui";; // Update path if needed

const SignUpButton = () => {
  const handleSignUp = () => {
    window.open("https://mailchi.mp/d3662d8474be/chargenextdoor", "_blank");
  };

  return (
    <Button
      title="Sign Up"
      onClick={handleSignUp}
      variant="secondary"
      className="bg-transparent text-white font-bold border-2 border-accent rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:-translate-y-1"
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
