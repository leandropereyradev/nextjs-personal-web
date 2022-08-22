/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Layout from "../components/Layout";
import styles from "../styles/contact.module.scss";
import { contactIcon } from "./api/contactIcons";

const variants = {
  hidden: { scale: 3, opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.5 + 0.2 * index },
  }),
};

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
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
          <FormattedMessage id="contact_title" defaultMessage="Contact" />
        </motion.h1>
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
          className={styles.contact_paragraph}
        >
          <p>
            <FormattedMessage id="contact_paragraph_1" defaultMessage="Contact" />
          </p>
          <p>
            <FormattedMessage id="contact_paragraph_2" defaultMessage="Contact" />
          </p>
        </motion.div>
        <div className={styles.contact_icons}>
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
            className={styles.contact_icons_line}
          />
          <div className={styles.contact_icons_icons}>
            {contactIcon.map(({ ref, icon }, index) => (
              <motion.a
                key={index}
                variants={variants}
                custom={index}
                initial="hidden"
                animate="visible"
                href={ref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`/images/${icon}.svg`} alt={icon} />
              </motion.a>
            ))}
          </div>
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
            className={styles.contact_icons_line}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
