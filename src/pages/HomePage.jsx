import React, { useState } from "react";
import About from "../components/About";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import MySkills from "../components/MySkills";
import Navbar from "../components/Navbar";
import Projects from "../components/ProjectComponent/Projects";
import { sendMessage } from "../libs/fetchingApi";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);

    await sendMessage(formData, () => {
      setIsDisabled(false);
      setShowAlert(true);
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <>
      <Navbar />
      <HeroComponent />
      <About />
      <MySkills />
      <Projects />
      <ContactInfo
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isDisabled={isDisabled}
      />
      <Footer />
      <Alert showAlert={showAlert} setShowAlert={setShowAlert} />
    </>
  );
};

export default HomePage;
