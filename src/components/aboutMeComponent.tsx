import CV from "../assets/CV.docx?url";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import photome from "../assets/photome.png?url";
import Button from "../components/buttonDownloadComponent";

export const AboutMe = () => {
  const [showTitle, setShowTitle] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV-JavierContreras.docx";
    link.click();
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <AnimatePresence mode="wait">
        {showTitle ? (
          // Título inicial
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white font-extrabold text-3xl md:text-[100px] text-left md:leading-[0.8]">
              <motion.span
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center"
              >
                WEB
                <div className="flex items-center ml-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    className="flex"
                  >
                    <FaGithub
                      className="text-white text-[20px] md:text-[50px] mx-2 cursor-pointer"
                      onClick={() =>
                        window.open("https://github.com/javierConpec", "_blank")
                      }
                    />
                    <FaLinkedin
                      className="text-blue-500 text-[20px] md:text-[50px] mx-2 cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/javiercontrerasp/",
                          "_blank"
                        )
                      }
                    />
                    <FaTiktok
                      className="text-pink-500 text-[20px] md:text-[50px] mx-2 cursor-pointer"
                      onClick={() =>
                        window.open("https://www.tiktok.com/@javi19cp", "_blank")
                      }
                    />
                  </motion.div>
                </div>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="block text-[50px] md:text-[160px]"
              >
                DEVELOPER
              </motion.span>
            </h1>
          </motion.div>
        ) : (
          // Bloque About Me completo con animación general
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 0, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-row items-center justify-center w-full h-full px-4 gap-12"
          >
            {/* Texto */}
            <div className="flex flex-col justify-center w-1/2">
              <div className="flex flex-col justify-center p-8 md:p-10 w-full">
                <div className="leading-[0.8] mb-5">
                  <h3 className="text-white text-2xl md:text-[35px] font-semibold">
                    Hello, my name is
                  </h3>
                  <h2 className="font-rammetto text-white text-[50px] md:text-[100px] font-extrabold">
                    Javier<strong className="text-[#a3cfc6ff]"> Contreras</strong>
                  </h2>
                  <h3 className="text-white text-2xl md:text-[35px] mt-5 font-semibold">
                    I'm a <strong className="text-[#a3cfc6ff]">Web Developer</strong>
                  </h3>
                </div>

                {/* Redes sociales */}
                <div className="flex flex-col md:flex-row mt-10 text-[#a3cfc6ff] gap-5">
                  <FaGithub
                    className="text-[20px] md:text-[50px] mx-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/javierConpec", "_blank")
                    }
                  />
                  <FaLinkedin
                    className="text-[20px] md:text-[50px] mx-2 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/javiercontrerasp/",
                        "_blank"
                      )
                    }
                  />
                  <FaFacebook
                    className="text-[20px] md:text-[50px] mx-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://www.facebook.com/jxviiiiiiZzzz", "_blank")
                    }
                  />
                  <FaInstagram
                    className="text-[20px] md:text-[50px] mx-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://www.instagram.com/javierconp/", "_blank")
                    }
                  />
                  <FaTiktok
                    className="text-[20px] md:text-[50px] mx-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://www.tiktok.com/@javi19cp", "_blank")
                    }
                  />
                </div>

                <Button text="Descargar CV" onClick={handleDownload} />
              </div>
            </div>

            {/* Imagen con blob */}
            <div className="relative w-80 h-80 md:w-[600px] md:h-[600px] rounded-full overflow-hidden">
              {/* Blob de fondo */}
              <svg
                viewBox="20 30 180 110"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full opacity-90"
              >
                <path
                  fill="#a3cfc6ff"
                  d="M39.1,-67C49.1,-62,54.4,-48.2,62.9,-35.6C71.4,-23,83,-11.5,85.3,1.3C87.6,14.2,80.6,28.3,69,35.6C57.4,42.8,41.3,43.2,29,51.5C16.8,59.8,8.4,76,-4,83C-16.5,90,-32.9,87.8,-40.5,76.8C-48,65.8,-46.6,45.9,-53.3,31.7C-60,17.4,-74.8,8.7,-75.4,-0.4C-76.1,-9.4,-62.6,-18.9,-53.6,-29.2C-44.6,-39.5,-40.2,-50.7,-32,-56.8C-23.8,-62.9,-11.9,-64,1.3,-66.3C14.6,-68.6,29.1,-72.1,39.1,-67Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* Imagen encima */}
              <img
  src={photome}
  alt="Javier"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover"
/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
