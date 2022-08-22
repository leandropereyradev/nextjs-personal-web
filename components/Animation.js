import styles from "../styles/animation.module.scss";
import { motion } from "framer-motion";

const Animation = ({ estado }) => {
  return (
    <>
      {estado && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
          }}
          className={styles.animation}
        >
          <div className={styles.animation_image}>
            <motion.img
              animate={{
                scale: [1.5, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              src="/images/logo.svg"
              alt="logo"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Animation;
