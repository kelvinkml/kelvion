import styles from "@/styles/Home.module.css";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationLinks}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.navigationLinks}>
        <Link href="/projects">Projects</Link>
      </div>
      <div className={styles.navigationLinks}>
        <Link href="/about">About</Link>
      </div>
      <div className={styles.navigationLinks}>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};
