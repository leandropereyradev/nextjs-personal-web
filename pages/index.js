/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.home_container}>
        <div className={styles.header_container}>
          <div className={styles.header_title_container}>
            <h1 className={styles.header_title}>
              <motion.span
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
              >
                Leandro{" "}
              </motion.span>
              <motion.span
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
              >
                Pereyra
              </motion.span>
            </h1>
            <div className={styles.header_lines_container}>
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
                  delay: 0.9,
                }}
                className={styles.header_lines_container_firstLine}
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
                  delay: 1.1,
                }}
                className={styles.header_lines_container_secondLine}
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
                delay: 1.3,
              }}
              className={styles.header_subtitle}
            >
              <FormattedMessage id="header_subtitle" defaultMessage="Desarrollador" />
            </motion.h3>
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
                delay: 1.5,
              }}
              className={styles.header_level}
            >
              v1.0 - Trainee
            </motion.h3>
          </div>
          <motion.div
            initial={{
              scale: 1.2,
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
            className={styles.header_image_container}
          >
            <img src="/images/logo.svg" alt="logo" />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
