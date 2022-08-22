import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import styles from "../styles/navMenu.module.scss";
import ActiveLink from "./ActiveLink";

const variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0 + 0.2 * index },
  }),
};

const NavMenu = ({ menues }) => {
  return (
    <div className={styles.navMenu}>
      <div className={styles.navMenu_menu}>
        <ul>
          {menues.map(([ref, idLang], index) => (
            <motion.li
              key={index}
              custom={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0 }}
            >
              <ActiveLink href={ref}>
                <FormattedMessage id={idLang} defaultMessage="NavBar" />
              </ActiveLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
