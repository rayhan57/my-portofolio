import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const message =
    "Hi Rayhan, I'm interested in your project. I admired your portfolio and would love to learn more about the details. Could we have a discussion to explore further?";
  const contacts = [
    {
      icon: <IoIosPhonePortrait />,
      link: `https://wa.me/6289602878147?text=${message}`,
    },
    { icon: <MdEmail />, link: "mailto:rayhanb18@gmail.com" },
    {
      icon: <FaMapLocationDot />,
      link: "https://maps.app.goo.gl/QGfgCEPuyEcqjd9W7",
    },
    { icon: <FaGithub />, link: "https://github.com/rayhan57" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/rayhan-lingga-buana-5054b6259/",
    },
  ];

  return (
    <div
      data-aos="fade"
      className="mt-24 flex items-center justify-center bg-primary p-5"
    >
      <div>
        <h1 className="text-center lg:text-lg">Rayhan Lingga Buana</h1>

        <div className="mt-4 space-x-3 lg:space-x-5">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              to={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border p-2"
            >
              {contact.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
