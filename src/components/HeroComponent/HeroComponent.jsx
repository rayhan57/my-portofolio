import React from "react";
import profilePhoto from "../../assets/img/profile-photo.webp";
import SocialMedia from "./SocialMedia";
import SoftSkill from "./SoftSkill";

const HeroComponent = () => {
  return (
    <div className="relative mt-7 lg:mt-14">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div
          data-aos="fade-right"
          className="space-y-2 self-start md:self-auto lg:space-y-5"
        >
          <h2 className="text-lg font-medium lg:text-3xl">Hey! This is</h2>
          <h1 className="text-2xl font-bold lg:text-5xl">
            Rayhan Lingga Buana
          </h1>
          <h3 className="lg:text-2xl">Frontend Developer</h3>

          <SocialMedia />
        </div>

        <div
          data-aos="fade-left"
          className="-mt-20 self-end md:mt-0 md:self-auto"
        >
          <img
            src={profilePhoto}
            className="w-72 brightness-90 contrast-125 lg:w-auto"
            alt="profile-photo"
          />
        </div>
      </div>

      <SoftSkill />
    </div>
  );
};

export default HeroComponent;
