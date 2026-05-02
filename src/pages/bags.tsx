import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import styles from "@/styles/Bags.module.css";

export default function Bags() {
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
        <div className={styles.links}>
          <Link
            className={styles.instagram}
            href="https://www.instagram.com/itsbgd"
          >
            Instagram
          </Link>
        </div>
        <Navigation />
        <div className={styles.projectTitle}>
          <h2 className={styles.titleText}>bgd</h2>
        </div>
        <div className={styles.comingSoonGrid}>
          <div className={styles.comingSoonCard}>
            <p className={styles.comingSoonCardTitle}>Project 01</p>
            <p className={styles.comingSoonLabel}>Coming soon</p>
          </div>
          <div className={styles.comingSoonCard}>
            <p className={styles.comingSoonCardTitle}>Project 02</p>
            <p className={styles.comingSoonLabel}>Coming soon</p>
          </div>
          <div className={styles.comingSoonCard}>
            <p className={styles.comingSoonCardTitle}>Project 03</p>
            <p className={styles.comingSoonLabel}>Coming soon</p>
          </div>
        </div>
        <div className={styles.projectInfo}>
          <p>
            bgd — handmade bags, built from scratch, one seam at a time.<br></br>
            <br></br>
            Pattern-cutting and component architecture have more in common than
            you&apos;d expect. Both start with a plan. Both require assembling
            parts in the right order. Both punish you immediately when
            something&apos;s off by even a few millimetres. And in both, the
            inside matters as much as the outside.<br></br>
            <br></br>
            Individual projects coming soon.
          </p>
        </div>
      </div>
    </>
  );
}
