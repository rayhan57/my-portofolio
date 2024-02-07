import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [showAlert]);

  return (
    <>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed left-1/2 top-5 z-10 w-[90%] -translate-x-1/2 rounded-lg bg-primary p-4"
            initial={{ top: "-100px" }}
            animate={{ top: "20px", transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <p className="text-lg font-medium lg:text-xl">
              Thank you for contacting me!
            </p>
            <p className="text-sm lg:text-base">
              I will get back to you as soon as possible
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Alert;
