import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import { Navigation } from "../../components/Navigation";
import { Header } from "../../components/Header";
import Link from "next/link";

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
        <div className={styles.links}>
          <div className={styles.socialsLink}>
            <Link href="https://www.linkedin.com/in/kelvin-leeming/">
              LinkedIn
            </Link>
          </div>
          <div className={styles.socialsLink}>
            <Link href="https://github.com/kelvinkml">GitHub</Link>
          </div>
        </div>
        <Navigation />
        <div className={styles.title}>
          <text>A little more about me...</text>
        </div>
        <div className={styles.aboutMe}>
          <text>
            Born in a weird time where I don’t remember the dawn of the internet
            but didn’t grow up with it, I explored, I took things apart, I
            looked with my eyes and my hands (sorry mum).<br></br>
            <br></br> Then I got my hands on a computer. I didn’t take this one
            apart though, I just read and watched videos. At the time I didn’t
            pay attention to the layout of the websites or the functionality, I
            just wanted to see the information.<br></br>
            <br></br>
            After finishing my Photography BA I looked at everything
            differently, a million things can be said without printing a single
            word and in a world where attention is decreasing you need to be
            able to say a lot before your audience reads a single word.
          </text>
        </div>
      </div>
    </>
  );
}
