/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/aboutPop.module.css";

const AboutPop = () => {
  return (
    <div className={styles.aboutPop_about}>
      <h3 className={styles.aboutPop_title}>
        <FormattedMessage id="aboutPop_title" defaultMessage="AboutPop" />
      </h3>
      <div className={styles.aboutPop_info_container}>
        <div className={styles.aboutPop_info_title_container}>
          <h1 className={styles.aboutPop_info_title_title}>
            <FormattedMessage id="aboutPop_info_title_title" defaultMessage="AboutPop" />
          </h1>
          <p className={styles.version}>v1.0 - Trainee</p>
          <p className={styles.aboutPop_info_title_text}>
            <FormattedMessage id="aboutPop_info_title_text" defaultMessage="AboutPop" />
          </p>
          <div className={styles.aboutPop_papa}>
            <p className={styles.aboutPop_info_title_text}>
              &quot;
              <FormattedMessage id="aboutPop_info_title_text_dialog" defaultMessage="AboutPop" />
              &quot;
            </p>
            <img src="/images/pap.svg" alt="papa" />
          </div>
          <p className={styles.aboutPop_info_title_text}>
            <FormattedMessage id="aboutPop_info_title_text_1" defaultMessage="AboutPop" />
          </p>
          <p className={styles.aboutPop_info_title_text}>
            <FormattedMessage id="aboutPop_info_title_text_2" defaultMessage="AboutPop" />
          </p>
          <p className={styles.aboutPop_info_title_text}>
            <FormattedMessage id="aboutPop_info_title_text_3" defaultMessage="AboutPop" />
          </p>
        </div>
        <div className={styles.aboutPop_skills_container}>
          <h3>Skills Trainee</h3>
          <div className={styles.skill_container}>
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              src="/images/react.svg"
              alt="react"
            />
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
              }}
              src="/images/html5.svg"
              alt="html"
            />
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.7,
              }}
              src="/images/css.svg"
              alt="css"
            />
          </div>
          <div className={styles.skill_container}>
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.9,
              }}
              src="/images/js.svg"
              alt="js"
            />
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.1,
              }}
              src="/images/wordpress.svg"
              alt="wp"
            />
            <motion.img
              initial={{
                scale: 2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.3,
              }}
              src="/images/git.svg"
              alt="git"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPop;
