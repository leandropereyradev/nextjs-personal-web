import { motion } from "framer-motion";

const variants = {
  hidden: { scale: 1.5, opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.7 + 0.2 * index },
  }),
};

const variants2 = {
  hidden: { opacity: 0 },
  visible: (index) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.7 + 0.2 * index },
  }),
};

export default function Cv_contact({ href, src, alt, classname, title, custom }) {
  return (
    <label>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.img
          variants={variants}
          custom={custom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          src={src}
          alt={alt}
          className={classname}
        />
      </a>
      <motion.a
        variants={variants2}
        custom={custom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </motion.a>
    </label>
  );
}
