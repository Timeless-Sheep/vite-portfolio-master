import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const bg = 'url(/new-images/jonvon.jpg)';
  return (
    <div
      className="hero bg-base-200 min-h-full grow"
      style={{ backgroundImage: bg }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6 glass">
            I am Pausebr3ak. I studied Bachelor of Science in Information
            Technology in the University of Southern Philippines Foundation.
          </p>
          <Link to="/about" className="btn btn-primary">
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
