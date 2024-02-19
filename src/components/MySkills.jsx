import React from "react";
import javaScript from "../assets/img/mySkills/javascript-logo.webp";
import nextJs from "../assets/img/mySkills/nextjs-logo.webp";
import nodeJs from "../assets/img/mySkills/nodejs-logo.webp";
import react from "../assets/img/mySkills/react-logo.webp";
import redux from "../assets/img/mySkills/redux-logo.webp";

const MySkills = () => {
  return (
    <div data-aos="fade-up" className="container mt-7 lg:mt-14">
      <h1 className="text-center text-xl font-semibold lg:text-2xl">
        M<span className="underline underline-offset-8">y Skill</span>s
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-around rounded-bl-xl rounded-tr-xl bg-white p-2">
        <img src={javaScript} className="w-24 lg:w-32" alt="javascript" />
        <img src={react} className="w-24 lg:w-32" alt="react" />
        <img src={redux} className="w-24 lg:w-32" alt="redux" />
        <img src={nextJs} className="w-24 lg:w-32" alt="nextjs" />
        <img src={nodeJs} className="w-24 lg:w-32" alt="nodejs" />
      </div>
    </div>
  );
};

export default MySkills;
