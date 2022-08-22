import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles/lang.module.scss";
import Animation from "./Animation";
import Earth from "./Earth";
import Espana from "./Espana";
import Catalunya from "./Catalunya";
import Inglaterra from "./Inglaterra";

const Lang = () => {
  const [lang, setLang] = useState(false);

  const openLang = () => {
    setLang(!lang);
  };

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    setLang(!lang);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.8,
        }}
        className={styles.navMenu}
      >
        <Earth openModal={() => openLang()} />
      </motion.div>
      {lang && (
        <div>
          <div className={styles.navMenu_flags} onClick={() => openModal()}>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Espana />
            </motion.div>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <Catalunya />
            </motion.div>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              <Inglaterra />
            </motion.div>
          </div>
        </div>
      )}
      <Animation estado={modal} set={() => setModal(!modal)} />
    </div>
  );
};

export default Lang;
