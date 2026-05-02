import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";

export default function Projects() {
  return (
    <>
      <Head>
        <title>kelv(io)n</title>
        <meta
          name="description"
          content="Kelvin Leeming's developer portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.projects}>
          <div className={styles.projectCard}>
            <div className={styles.projectTitles}>
              <Link href="/swapz">Swapz</Link>
            </div>
            <p className={styles.projectBody}>
              A mobile app for trading items locally — no money, no shipping.
              Built with React Native, Expo, and Firebase.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectTitles}>
              <Link href="/Board">Board?</Link>
            </div>
            <p className={styles.projectBody}>
              Full stack from scratch — a REST API in Express.js backed by
              PostgreSQL, with a React front end consuming it.
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectTitles}>
              <Link href="/coming-soon">Coming Soon</Link>
            </div>
            <p className={styles.projectBody}>
              Projects currently in progress or on the horizon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
