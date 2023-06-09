import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import styles from "@/styles/NCGames.module.css";
import Image from "next/image";

import board1 from "../../images/board1.png";
import board2 from "../../images/board2.png";

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
        <div className={styles.links}>
          <Link
            className={styles.gitHub}
            href={"https://github.com/kelvinkml/nc-games-react"}
          >
            GitHub repo
          </Link>
          <br></br>
          <Link
            className={styles.liveSite}
            href={"https://shiny-pithivier-e2b325.netlify.app/"}
          >
            Live site
          </Link>
        </div>
        <Navigation />
        <div className={styles.projectTitle}>
          <h2 className={styles.titleText}>Board?</h2>
        </div>
        <div className={styles.imageHolder}>
          <div className={styles.image1}>
            <Image
              alt="screenshot of website"
              className={styles.images}
              src={board1}
            />
          </div>
        </div>
        <div className={styles.projectInfo}>
          <text>
            Board? is a full stack project built from scratch, using Test Driven
            Development (Jest). I started with making an API (Express.js) to
            interact with a seeded database (PostgreSQL) making sure to handle
            errors with custom error messages with Promises and .catch blocks.
            <br></br>
            <br></br>Using React as a framework for the front-end making use of
            re-usable components and a mobile first approach to the design of
            the site.
          </text>
        </div>
      </div>
    </>
  );
}
