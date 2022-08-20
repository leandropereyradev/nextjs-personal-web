/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/about.module.css";
import AboutPop from "../components/AboutPop";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <div className={styles.about_container}>
        <div className={styles.about_header}>
          <div className={styles.about_title_container}>
            <motion.h1
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              className={styles.about_title}
            >
              <FormattedMessage id="about_title" defaultMessage="Sobre Mi" />
            </motion.h1>
            <div className={styles.about_lines_container}>
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
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className={styles.about_lines_container_firstLine}
              ></motion.div>
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
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.7,
                }}
                className={styles.about_lines_container_secondLine}
              ></motion.div>
            </div>
            <motion.h3
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9,
              }}
              className={styles.about_subtitle}
            >
              <FormattedMessage id="about_subtitle" defaultMessage="development" />
            </motion.h3>
          </div>
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
              delay: 1.1,
            }}
            className={styles.about_image_container}
          >
            <img src="/images/photo.png" alt="logo" />
          </motion.div>
        </div>
        <AboutPop />
      </div>
    </Layout>
  );
};

export default About;
