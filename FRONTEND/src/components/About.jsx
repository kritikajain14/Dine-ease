import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Byte o Byte, a pure vegetarian haven for food lovers who crave flavor, freshness, and a touch of creativity. From hearty North Indian curries to cheesy Italian pastas, from sizzling street-style chaats to wholesome salads, every plate is crafted with love and served with a smile.
              At Byte o Byte, we believe vegetarian food can be exciting, indulgent, and absolutely unforgettable. 
              Whether you’re here for a cozy family dinner, a quick bite with friends, or a healthy meal on the go, we’ve got something to satisfy every craving — one byte at a time.
            </p>
           <Link to="/cuisine" className="explore-btn">
              Explore Cuisine{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;