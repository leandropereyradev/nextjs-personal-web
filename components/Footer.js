import { FormattedMessage } from "react-intl";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>www.LeandroPereyra.com</p>
      <p>
        Copyright © 2023.{" "}
        <span>
          <FormattedMessage id="footer" defaultMessage="All Rights Reserved" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
