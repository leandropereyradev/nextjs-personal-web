import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/activeLink.module.css";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  let style = null;

  if (router.asPath === href) {
    style = styles.active;
  }

  return (
    <Link href={href}>
      <a className={style}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
