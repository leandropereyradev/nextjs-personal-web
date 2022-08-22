/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/about.module.scss";
import AboutPop from "../components/AboutPop";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about_title}>
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
          >
            <FormattedMessage id="about_title" defaultMessage="Sobre Mi" />
          </motion.h1>
          <div className={styles.about_title_lines}>
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
              className={styles.about_title_lines_firstLine}
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
              className={styles.about_title_lines_secondLine}
            ></motion.div>
          </div>
          <motion.h2
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
          >
            <FormattedMessage id="about_subtitle" defaultMessage="development" />
          </motion.h2>
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
    </Layout>
  );
};

export default About;
