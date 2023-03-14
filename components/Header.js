import Image from "next/image";
import logo from "../logo.png";
import styles from "@/styles/Home.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image alt="main logo" className={styles.logo} src={logo} />
    </div>
  );
};
