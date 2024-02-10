import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import animeList from "../../assets/img/myProjects/anime-list.webp";
import myMovies from "../../assets/img/myProjects/my-movies.webp";
import rayStore from "../../assets/img/myProjects/ray-store.webp";
import studentData from "../../assets/img/myProjects/student-data.webp";
import weatherApp from "../../assets/img/myProjects/weather-app.webp";
import weddingApp from "../../assets/img/myProjects/wedding-app.webp";
import ModalImage from "./ModalImage";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    image: "",
    alt: "",
  });

  const projectImages = [
    {
      image: myMovies,
      alt: "my-movies",
    },
    {
      image: animeList,
      alt: "anime-list",
    },
    {
      image: rayStore,
      alt: "ray-store",
    },
    {
      image: weatherApp,
      alt: "weather-app",
    },
    {
      image: weddingApp,
      alt: "wedding-app",
    },
    {
      image: studentData,
      alt: "student-data",
    },
  ];

  const handleImageClick = (image, alt) => {
    setSelectedImage({ image, alt });
    setModalOpen(true);
  };

  return (
    <div id="projects" className="container pt-10 md:pt-20">
      <h1 className="text-center text-xl font-semibold lg:text-2xl">
        My Projects
      </h1>

      <div className="mt-5 flex items-center justify-center gap-1.5 pb-10 lg:mt-10 lg:gap-3">
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 2 : 3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projectImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer overflow-hidden rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt={item.alt}
                onClick={() => handleImageClick(item.image, item.alt)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {modalOpen && (
        <ModalImage setModalOpen={setModalOpen} selectedImage={selectedImage} />
      )}
    </div>
  );
};

export default Projects;
