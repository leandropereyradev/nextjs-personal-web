import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import styles from "../styles/portfolio.module.scss";

const Portfolio = () => {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <div className={styles.portfolio_title}>
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
            <FormattedMessage id="portfolio_title" defaultMessage="Portfolio" />
          </motion.h1>
          <div className={styles.portfolio_title_lines}>
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
              className={styles.portfolio_title_lines_firstLine}
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
              className={styles.portfolio_title_lines_secondLine}
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
            <FormattedMessage id="portfolio_subtitle" defaultMessage="proyectos" />
          </motion.h2>
        </div>
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
            className={styles.portfolio_image_container_wonderghost}
            alt="wonderghost"
            src="/images/wonderghost-min.webp"
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
            src="/images/listatareas-min.webp"
            alt="listatareas"
            className={styles.portfolio_image_container_listatareas}
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
            src="/images/weather-min.webp"
            alt="weather"
            className={styles.portfolio_image_container_weather}
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
            src="/images/peces-min.webp"
            alt="peces"
            className={styles.portfolio_image_container_peces}
          />
        </div>
      </div>
      <Carousel />
    </Layout>
  );
};

export default Portfolio;
