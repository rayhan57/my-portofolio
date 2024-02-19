import React from "react";
import accuracy from "../../assets/img/softSkill/accuracy.webp";
import problemSolving from "../../assets/img/softSkill/problem-solving.webp";
import teamWork from "../../assets/img/softSkill/teamwork.webp";
import timeManagement from "../../assets/img/softSkill/time-management.webp";

const SoftSkill = () => {
  const softSkill = [
    {
      image: teamWork,
      title: "Team Work",
    },
    {
      image: problemSolving,
      title: "Problem Solving",
    },
    {
      image: accuracy,
      title: "Accuracy",
    },
    {
      image: timeManagement,
      title: "Time Management",
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full bg-primary py-2 text-sm font-medium lg:py-5 lg:text-lg">
      <div className="container flex items-center justify-around">
        {softSkill.map((item, index) => (
          <div data-aos="fade" key={index}>
            <img
              src={item.image}
              className="mx-auto w-9 lg:w-12"
              alt={item.title}
            />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkill;
