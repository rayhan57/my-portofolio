import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactInfo = ({ formData, setFormData, handleSubmit, isDisabled }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div data-aos="fade-up" className="container mt-10 lg:mt-20">
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-primary py-4 pe-4 ps-4 md:flex-row md:ps-0 lg:gap-12 lg:py-8 lg:pe-8">
        {/* Contact Info */}
        <div className="flex-1 space-y-4 rounded-e-xl rounded-s-xl bg-white p-6 text-black md:rounded-s-none lg:p-12">
          <h1 className="pb-1 text-xl font-bold lg:pb-3 lg:text-2xl">
            Contact Info
          </h1>
          <h4 className="flex items-center gap-2 text-base font-medium lg:gap-4 lg:text-lg">
            <span className="rounded-full bg-primary p-2 text-white">
              <FaMapLocationDot />
            </span>
            Jatiwaringin, Pondok Gede, Bekasi
          </h4>
          <h4 className="flex items-center gap-2 text-base font-medium lg:gap-4 lg:text-lg">
            <span className="rounded-full bg-primary p-2 text-white">
              <MdEmail />
            </span>
            rayhanb18@gmail.com
          </h4>
          <h4 className="flex items-center gap-2 text-base font-medium lg:gap-4 lg:text-lg">
            <span className="rounded-full bg-primary p-2 text-white">
              <IoIosPhonePortrait />
            </span>
            +62 896-0287-8147
          </h4>
        </div>

        <ContactForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
