import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/navMenu.module.css";
import ActiveLink from "./ActiveLink";
import Lang from "./Lang";

const NavMenu = () => {
  return (
    <>
      <div className={styles.navMenu_container}>
        <div className={styles.navMenu_menu_container}>
          <ul>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <ActiveLink href="/">
                <FormattedMessage id="navMenu-home" defaultMessage="Home" />
              </ActiveLink>
            </motion.li>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <ActiveLink href="/portfolio">
                <FormattedMessage id="navMenu-portfolio" defaultMessage="Portfolio" />
              </ActiveLink>
            </motion.li>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              <ActiveLink href="/about">
                <FormattedMessage id="navMenu-about" defaultMessage="About Me" />
              </ActiveLink>
            </motion.li>
            <motion.li
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.7,
              }}
            >
              <ActiveLink href="/contact">
                <FormattedMessage id="navMenu-contact" defaultMessage="Contact" />
              </ActiveLink>
            </motion.li>
          </ul>
        </div>
        <div>
          <Lang />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
