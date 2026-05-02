import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Projects.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";

export default function ComingSoon() {
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
              <Link href="/bags">bgd</Link>
            </div>
            <p className={styles.projectBody}>
              A portfolio for handmade bags. Pattern cutting, fabrication, and
              a few lessons about measuring twice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
