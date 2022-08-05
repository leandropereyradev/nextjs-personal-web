import { FormattedMessage } from "react-intl";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>www.LeandroPereyra.com</p>
      <p>
        Copyright © 2022.{" "}
        <span>
          <FormattedMessage id="footer" defaultMessage="All Rights Reserved" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
