import React from "react";
import aboutImage from "../assets/img/about-image.webp";

const About = () => {
  return (
    <div
      id="about"
      className="container flex flex-col items-center justify-around pt-10 md:flex-row lg:pt-20"
    >
      <div data-aos="fade-up" className="max-w-md space-y-4 lg:space-y-7">
        <h1 className="text-xl font-semibold lg:text-2xl">
          <span className="underline underline-offset-8">About M</span>e
        </h1>
        <img
          src={aboutImage}
          className="float-right w-40 md:hidden"
          alt="about-me"
        />
        <p className="text-sm font-light">
          Hi, I am a Computer Science graduate with hands-on experience as a fullstack developer, working with Laravel for backend and React for frontend development. In this role, I've contributed to building functional and engaging web applications, managing both backend and user interface aspects. I am eager to continuously hone my skills and am ready to contribute to innovative technology projects.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="hidden md:block">
        <img src={aboutImage} className="w-40 md:w-96" alt="about-me" />
      </div>
    </div>
  );
};

export default About;
