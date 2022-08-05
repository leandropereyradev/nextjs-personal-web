/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import Layout from "../components/Layout";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact_container}>
        <div className={styles.contact_title}>
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
            <motion.a
              initial={{
                scale: 3,
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
              href="mailto:contacto@leandropereyra.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/mail.svg" alt="mail" className={styles.iconContact} />
            </motion.a>
            <motion.a
              initial={{
                scale: 3,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.7,
              }}
              href="https://github.com/leandropereyradev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github.svg" alt="github" className={styles.iconContact} />
            </motion.a>
            <motion.a
              initial={{
                scale: 3,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.9,
              }}
              href="https://www.linkedin.com/in/leandropereyradev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.svg" alt="linkedin" className={styles.iconContact} />
            </motion.a>
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
              delay: 0.9,
            }}
            className={styles.contact_icons_line}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
