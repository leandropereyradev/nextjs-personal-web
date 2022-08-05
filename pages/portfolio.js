import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import styles from "../styles/portfolio.module.css";

const Portfolio = () => {
  return (
    <Layout>
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_title_container}>
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
            className={styles.portfolio_title}
          >
            <FormattedMessage id="portfolio_title" defaultMessage="Portfolio" />
          </motion.h1>
          <div className={styles.portfolio_lines_container}>
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
              className={styles.portfolio_lines_container_firstLine}
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
              className={styles.portfolio_lines_container_secondLine}
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
            className={styles.portfolio_subtitle}
          >
            <FormattedMessage id="portfolio_subtitle" defaultMessage="proyectos" />
          </motion.h3>
        </div>
        <div className={styles.portfolio_images}>
          <div className={styles.portfolio_image_container}>
            <motion.img
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
              className={styles.celia}
              alt="celia"
              src="/images/celiamartinperez-min.webp"
            />
            <motion.img
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
              src="/images/yogaypilatesoviedo-min.webp"
              alt="yoga"
              className={styles.yoga}
            />
            <motion.img
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
              src="/images/leandropereyra-min.webp"
              alt="leandro"
              className={styles.leandro}
            />
            <motion.img
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
              src="/images/elmenudealicia-min.webp"
              alt="alicia"
              className={styles.alicia}
            />
          </div>
        </div>
      </div>
      <Carousel />
    </Layout>
  );
};

export default Portfolio;
