import Head from "next/head";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import styles from "@/styles/Swapz.module.css";
import Image from "next/image";
import swapz1 from "@/images/swapz1.png";
import swapz2 from "@/images/swapz2.png";
import swapz3 from "@/images/swapz3.png";
import Link from "next/link";

export default function Swapz() {
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
        <div className={styles.gitHub}>
          <Link
            className={styles.gitHub}
            href={"https://github.com/kelvinkml/swapz"}
          >
            GitHub
          </Link>
        </div>
        <Navigation />
        <div className={styles.projectTitle}>
          <h2 className={styles.titleText}>Swapz</h2>
        </div>
        <div className={styles.imageHolder}>
          <div className={styles.image1}>
            <Image
              alt="screenshot of mobile app"
              className={styles.images}
              src={swapz1}
            />
          </div>
          <div className={styles.image2}>
            <Image
              alt="screenshot of mobile app"
              className={styles.images}
              src={swapz2}
            />
          </div>
          <div className={styles.image3}>
            <Image
              alt="screenshot of mobile app"
              className={styles.images}
              src={swapz3}
            />
          </div>
        </div>
        <div className={styles.projectInfo}>
          <p>
            Swapz lets people trade items locally — no money, no shipping, no
            waste. The idea: swap what you have for what you need, with people
            nearby.<br></br>
            <br></br>
            Built with React Native and Expo for the front-end. Firebase handles
            everything on the back-end: user authentication, image hosting,
            database storage, and API calls.
          </p>
        </div>
      </div>
    </>
  );
}
