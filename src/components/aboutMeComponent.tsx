import me from "../assets/me.jpg?url";
import CV from "../assets/CV.docx?url";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import TextType from "../styles/animated/textType";
import Button from "./buttonDownloadComponent";

export const AboutMe = () => {
  const [showTitle, setShowTitle] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV-JavierContreras.docx";
    link.click();
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 4000);
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
            exit={{ opacity: 0, x: 0 }} // sale hacia la izquierda
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
                        window.open(
                          "https://www.tiktok.com/@javi19cp",
                          "_blank"
                        )
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
          // About Me
          <div>
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center p-8 md:p-10 w-full text-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="font-rammetto text-white text-[50px] md:text-[100px] font-extrabold ">
                  Javier Contreras
                </h2>
                <h3 className="text-white text-2xl mb-2 font-bold ">
                  - Desarrollador Web -
                </h3>

                <div className="flex flex-col items-center justify-center text-center p-6 relative z-10">
                  <TextType
                    className="text-white text-sm md:text-xl max-w-3xl mx-auto leading-relaxed"
                    text={[
                      `Hola, soy Javier, un desarrollador junior apasionado por el desarrollo frontend. 
Estudié Computación e Informática y, a lo largo de mi formación, descubrí mi pasión 
por crear interfaces web atractivas y funcionales. Trabajo con tecnologías modernas y 
siempre busco mejorar mis habilidades para construir experiencias digitales limpias, 
rápidas y fáciles de usar.`,
                    ]}
                    typingSpeed={15}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
