import styles from "../styles/notFound.module.css";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <>
      <Layout>
        <div className={styles.notFound_container}>
          <div className={styles.notFound_cloud}>
            <motion.img
              initial={{
                x: 400,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 7,
                ease: "easeOut",
              }}
              src="/images/cloud.svg"
              alt="cloud"
            />
          </div>
          <div className={styles.notFound_branch}>
            <motion.img
              initial={{
                x: -300,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 3,
              }}
              src="/images/branch.svg"
              alt="branch"
            />
          </div>
          <div className={styles.notFound_totoro}>
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 2,
              }}
              src="/images/totoro.png"
              alt="totoro"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
