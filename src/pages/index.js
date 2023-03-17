import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
      </Head>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.titles}>
          <h2 id={styles.softwareDeveloper}>Software Developer</h2>
          <h2 id={styles.webDesigner}>Web Designer</h2>
          <h2 id={styles.photographer}>Photographer</h2>
        </div>
        <div className={styles.homepageInfo}>
          <text>
            Kelvin Miles Leeming, born in Preston, England and currently living
            in the city of the North, Manchester. <br></br>
            <br></br>With a background in photography and image making I’m
            bringing the same principles to web design and software development.
            Clean aesthetics and where framing is key. A picture tells a
            thousand words and a website can host millions.<br></br>
            <br></br>
          </text>
        </div>
        <text className={styles.mobileMessage}>
          Tap the screen, see what happens...
        </text>
      </div>
    </>
  );
}
