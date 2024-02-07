import React from "react";
import accuracy from "../../assets/img/softSkill/accuracy.png";
import problemSolving from "../../assets/img/softSkill/problem-solving.png";
import teamWork from "../../assets/img/softSkill/teamwork.png";
import timeManagement from "../../assets/img/softSkill/time-management.png";

const SoftSkill = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-primary py-2 text-sm font-medium lg:py-5 lg:text-lg">
      <div className="container flex items-center justify-around">
        <div>
          <img
            src={teamWork}
            className="mx-auto w-9 lg:w-12"
            alt="time-management"
          />
          <h2>Team Work</h2>
        </div>
        <div>
          <img
            src={problemSolving}
            className="mx-auto w-9 lg:w-12"
            alt="problem-solving"
          />
          <h2>Problem Solving</h2>
        </div>
        <div>
          <img src={accuracy} className="mx-auto w-9 lg:w-12" alt="accuracy" />
          <h2>Accuracy</h2>
        </div>
        <div>
          <img
            src={timeManagement}
            className="mx-auto w-9 lg:w-12"
            alt="time-management"
          />
          <h2>Time Management</h2>
        </div>
      </div>
    </div>
  );
};

export default SoftSkill;
