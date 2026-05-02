import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import styles from "@/styles/NCGames.module.css";
import Image from "next/image";
import board1 from "@/images/board1.png";

export default function Board() {
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
          <p>
            Board? is a full stack project built from scratch. I started with
            the API — Express.js connected to a seeded PostgreSQL database,
            error handling written with Promises and custom error messages, all
            developed using TDD with Jest.<br></br>
            <br></br>
            The front-end is React: reusable components, mobile-first, consuming
            the API I&apos;d built. The goal was to own every layer of the stack
            and understand how they talk to each other.
          </p>
        </div>
      </div>
    </>
  );
}
