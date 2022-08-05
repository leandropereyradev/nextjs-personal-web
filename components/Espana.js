import styles from "../styles/flags.module.css";
import { langContext } from "../context/langContext";
import { useContext } from "react";

const Espana = () => {
  const lang = useContext(langContext);

  return (
    <svg onClick={() => lang.changeLang("es")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 325" className={styles.espana}>
      <path d="M0 0h540v325H0V0z" className={styles.espaRed} />
      <path d="M0 81.2h540v162.5H0V81.2z" className={styles.espaYellow} />
    </svg>
  );
};

export default Espana;
