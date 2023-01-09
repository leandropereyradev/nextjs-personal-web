/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import styles from "../styles/aboutPop.module.scss";

const variants = {
  hidden: { scale: 2, opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0 + 0.2 * index },
  }),
};

const AboutPop = () => {
  return (
    <div className={styles.aboutPop}>
      <h3>
        <FormattedMessage id="aboutPop_title" defaultMessage="AboutPop" />
      </h3>
      <h1>
        <FormattedMessage id="aboutPop_info_title_title" defaultMessage="AboutPop" />
      </h1>
      <div className={styles.aboutPop_info}>
        <div className={styles.aboutPop_info_father}>
          <p>
            <FormattedMessage id="aboutPop_info_title_text" defaultMessage="AboutPop" />
          </p>
          <div className={styles.aboutPop_info_papa}>
            <p>
              &quot;
              <FormattedMessage id="aboutPop_info_title_text_dialog" defaultMessage="AboutPop" />
              &quot;
            </p>
            <img src="/images/pap.svg" alt="papa" />
          </div>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_1" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_2" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_3" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_4" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_5" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_6" defaultMessage="AboutPop" />
          </p>
          <p>
            <FormattedMessage id="aboutPop_info_title_text_7" defaultMessage="AboutPop" />
          </p>
        </div>
        <div className={styles.aboutPop_skills}>
          <h2>Skills Trainee</h2>
          <div className={styles.aboutPop_skills_container}>
            {["react", "nextjs", "mongo", "html5", "css", "js", "wordpress", "git"].map((tec, index) => (
              <motion.img
                key={index}
                variants={variants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                src={`/images/${tec}.svg`}
                alt={tec}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutPop_links}>
        <Link href="/cv">
          <motion.a
            initial={{
              opacity: 0,
              scale: 1.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <FormattedMessage id="aboutPop_cv" defaultMessage="AboutPop" />
          </motion.a>
        </Link>
      </div>
    </div>
  );
};

export default AboutPop;
