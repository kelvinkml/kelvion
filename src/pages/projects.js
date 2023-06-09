import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Projects.module.css";
import { Navigation } from "../../components/Navigation";
import { Header } from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <text className={styles.projectBody}>
              Built in React Native, Swaps is a mobile app that allows users to
              trade or barter their old (or new) items without the use of money.
            </text>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectTitles}>
              <Link href="/Board">Board?</Link>
            </div>
            <text className={styles.projectBody}>
              A full stack exercise building my own API (using Express) and a
              front end (React.js){" "}
            </text>
          </div>
        </div>
      </div>
    </>
  );
}
