/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import styles from "../styles/cv.module.scss";
import LineWebs from "../components/LineWebs";
import { webs } from "./api/lineWebs";
import { FormattedMessage } from "react-intl";
import { academic } from "./api/lineAcademic";
import { cvIcons } from "./api/cvIcons";
import { motion } from "framer-motion";
import Cv_contact from "../components/Cv_contact";

const Cv = () => {
  return (
    <Layout>
      <div className={styles.cv}>
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
          className={styles.cv_title}
        >
          Curriculum Vitae
        </motion.h1>

        <LineWebs data={webs} title="lineWebs" />

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className={styles.cv_skills}
        >
          <div>
            <h2 className={styles.cv_skills_subtitle}>
              <FormattedMessage id="cv_skills" defaultMessage="Cv" />
            </h2>
            <ul>
              {["React.Js", "Next.JS", "HTML", "CSS", "JavaScript", "WordPress", "MongoDB", "Tailwind", "MaterialUI"].map(
                (skill, index) => (
                  <li key={index}>{skill}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className={styles.cv_skills_subtitle}>
              <FormattedMessage id="cv_aptitud" defaultMessage="Cv" />
            </h2>
            <ul>
              {["soft1", "soft2", "soft3", "soft4", "soft5", "soft6"].map((soft, index) => (
                <li key={index}>
                  <FormattedMessage id={soft} defaultMessage="Cv" />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <LineWebs data={academic} title="lineAcademic" />

        <div className={styles.cv_contact}>
          <div className={styles.cv_contact_link}>
            <div className={styles.cv_skills_subtitle_container}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className={styles.cv_skills_subtitle}
              >
                <FormattedMessage id="cv_info_contact" defaultMessage="Cv" />
              </motion.h2>
            </div>
            <div className={styles.cv_contact_link_icons}>
              {cvIcons.map((icon, index) => (
                <Cv_contact
                  key={index}
                  custom={index}
                  href={icon.href}
                  src={icon.src}
                  alt={icon.alt}
                  classname={icon.classname}
                  title={icon.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.cv_download}>
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
            href="/pdf/Leandro_Pereyra.pdf"
            download="CV Leandro Pereyra.pdf"
          >
            <FormattedMessage id="download_cv" defaultMessage="Cv" />
          </motion.a>
        </div>
      </div>
    </Layout>
  );
};

export default Cv;
