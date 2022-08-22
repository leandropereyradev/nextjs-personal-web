import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/lineWebs.module.scss";

const LineWebs = ({ data, title }) => {
  return (
    <div className={styles.timeline}>
      <motion.h2
        initial={{
          scale: 0,
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
        className={styles.timeline_title}
      >
        <FormattedMessage id={title} defaultMessage="TimeLine" />
      </motion.h2>
      <div>
        <ul>
          {data.map((web, index) => (
            <motion.li
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: [0, 1],
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
              key={index}
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: [0, 1],
                }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.7,
                }}
                className={styles.timeline_info}
              >
                <h3>
                  <FormattedMessage id={web.date} defaultMessage="TimeLine" />
                </h3>
                <h1>
                  <FormattedMessage id={web.title} defaultMessage="TimeLine" />
                </h1>
                <h2>
                  <FormattedMessage id={web.subtitle} defaultMessage="TimeLine" />
                </h2>
                {web.tec.map((tec, i) => (
                  <p key={i}>
                    - <FormattedMessage id={tec} defaultMessage="TimeLine" />
                  </p>
                ))}
              </motion.div>
              <div className={styles.timeline_line} />
              <div className={styles.timeline_circle} />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LineWebs;
