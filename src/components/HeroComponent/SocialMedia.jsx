import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4 pt-2 lg:gap-8 lg:pt-5">
      <Link
        to={"https://github.com/rayhan57"}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-black lg:h-10 lg:w-10"
      >
        <FaGithub size={20} />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/rayhan-lingga-buana-5054b6259/"}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-black lg:h-10 lg:w-10"
      >
        <FaLinkedinIn size={20} />
      </Link>
    </div>
  );
};

export default SocialMedia;
