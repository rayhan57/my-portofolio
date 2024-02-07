import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const ModalImage = ({ setModalOpen, selectedImage }) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80">
      <button
        className="absolute right-2 top-2 rounded-md hover:bg-slate-700 lg:right-10 lg:top-5"
        onClick={() => setModalOpen(false)}
      >
        <IoMdClose size={24} />
      </button>

      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        src={selectedImage.image}
        alt={selectedImage.alt}
        className="rounded-md md:w-[70%]"
      />
    </div>
  );
};

export default ModalImage;
