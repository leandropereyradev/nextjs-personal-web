/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <>
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
          delay: 2,
        }}
        className={styles.nav_container}
      >
        <div className={styles.nav_menu_container}>
          <img src="/images/menu.svg" alt="logo" className={styles.logo} onClick={() => openMenu()} />
          {open && (
            <>
              <Link href="/">
                <a href="">
                  <motion.img
                    initial={{
                      scale: 0,
                      opacity: 0,
                      x: 0,
                      y: 60,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: -10,
                      y: -140,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: 0,
                      y: 60,
                    }}
                    src="/images/home-bubble.svg"
                    alt="home"
                    className={styles.home}
                    onClick={() => openMenu()}
                  />
                </a>
              </Link>
              <Link href="/portfolio">
                <a href="">
                  <motion.img
                    initial={{
                      scale: 0,
                      opacity: 0,
                      x: 50,
                      y: 60,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: -60,
                      y: -120,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.4,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: 50,
                      y: 60,
                    }}
                    src="/images/portfolio-bubble.svg"
                    alt="portfolio"
                    className={styles.portfolio}
                    onClick={() => openMenu()}
                  />
                </a>
              </Link>
              <Link href="/about">
                <a href="">
                  <motion.img
                    initial={{
                      scale: 0,
                      opacity: 0,
                      x: 50,
                      y: 30,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: -130,
                      y: -90,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: 50,
                      y: 20,
                    }}
                    src="/images/about-bubble.svg"
                    alt="about"
                    className={styles.about}
                    onClick={() => openMenu()}
                  />
                </a>
              </Link>
              <Link href="/contact">
                <a href="">
                  <motion.img
                    initial={{
                      scale: 0,
                      opacity: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: -170,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      x: 0,
                      y: 0,
                    }}
                    src="/images/contact-bubble.svg"
                    alt="contact"
                    className={styles.contact}
                    onClick={() => openMenu()}
                  />
                </a>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
