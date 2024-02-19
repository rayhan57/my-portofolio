import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const isDesktop = window.innerWidth > 768;
  const message =
    "Hi Rayhan, I'm interested in your project. I admired your portfolio and would love to learn more about the details. Could we have a discussion to explore further?";
  const contactLink = `https://wa.me/6289602878147?text=${message}`;

  return (
    <nav className="container">
      <div
        data-aos={isMobile ? "" : "fade-down"}
        className="mx-auto flex flex-wrap items-center justify-between py-4 text-sm md:mt-3 lg:text-base"
      >
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBarsStaggered size={20} />
        </button>

        {/* Mobile Screen */}
        <RouterLink
          to={contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border px-1 hover:bg-primary md:hidden"
        >
          Contact Me
        </RouterLink>

        <motion.div
          animate={{
            y: isOpen && isMobile ? 0 : isDesktop ? 0 : -100,
          }}
          className={`${isOpen ? "block" : "hidden "} absolute left-0 top-0 z-10 w-full bg-slate-700 md:static md:ms-auto md:block md:w-auto md:bg-transparent`}
        >
          <button className="float-right me-2 mt-2 rounded-md hover:bg-slate-600 md:hidden">
            <IoMdClose size={22} onClick={() => setIsOpen(false)} />
          </button>
          <ul className="mt-4 flex flex-col space-y-1 p-4 font-light md:mt-0 md:flex-row md:space-x-16 md:space-y-0 md:p-0">
            <li className="rounded-md p-1 hover:bg-primary md:rounded-none md:p-0 md:hover:border-b-2 md:hover:border-primary md:hover:bg-transparent">
              <ScrollLink
                className="block w-full cursor-pointer"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li className="rounded-md p-1 hover:bg-primary md:rounded-none md:p-0 md:hover:border-b-2 md:hover:border-primary md:hover:bg-transparent">
              <ScrollLink
                className="block w-full cursor-pointer"
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </ScrollLink>
            </li>
            {/* Desktop Screen */}
            <li className="hidden border px-1 hover:bg-primary md:block">
              <RouterLink
                to={contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </RouterLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
