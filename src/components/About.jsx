import React from "react";
import aboutImage from "../assets/img/about-image.webp";

const About = () => {
  return (
    <div
      id="about"
      className="container flex flex-col items-center justify-around pt-10 md:flex-row lg:pt-20"
    >
      <div className="max-w-md space-y-4 lg:space-y-7">
        <h1 className="text-xl font-semibold lg:text-2xl">
          <span className="underline underline-offset-8">About M</span>e
        </h1>
        <img
          src={aboutImage}
          className="float-right w-40 md:hidden"
          alt="about-me"
        />
        <p className="text-sm font-light">
          Hi, I'm Rayhan Lingga Buana, a 22 year old recent graduate with an
          educational background in Informatics Engineering. Throughout my
          studies, I've acquired knowledge of fundamental concepts and
          technologies related to computers, software, and systems development.
          I possess a strong desire to continue learning, growing, and achieving
          meaningful accomplishments in the technology industry.
        </p>
      </div>

      <div className="hidden md:block">
        <img src={aboutImage} className="w-40 md:w-96" alt="about-me" />
      </div>
    </div>
  );
};

export default About;
