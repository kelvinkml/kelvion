import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";

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
          <p>
            Kelvin Miles Leeming — born in Preston, now based in Todmorden, a
            small town wedged in the hills between Manchester and Leeds.<br></br>
            <br></br>
            By day I work as a UCaaS faults specialist, diagnosing issues in
            cloud communications infrastructure. The rest of the time I build
            things for the web.<br></br>
            <br></br>
            A Photography BA taught me to care about what&apos;s in the frame
            and what isn&apos;t. That instinct follows me into every line of
            code.
          </p>
        </div>
        <p className={styles.mobileMessage}>
          Tap the screen, see what happens...
        </p>
      </div>
    </>
  );
}
