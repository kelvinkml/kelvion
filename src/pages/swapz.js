import Head from "next/head";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import styles from "@/styles/Swapz.module.css";
import Image from "next/image";
import swapz1 from "../../images/swapz1.png";
import swapz2 from "../../images/swapz2.png";
import swapz3 from "../../images/swapz3.png";
import Link from "next/link";
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
          <text>
            Swapz is a creative platform that allows people to swap their own
            items at no extra cost with others in their local area, helping to
            reduce waste and promote a more sustainable way of living. Swapz is
            designed to be easy to use and navigate, making it accessible to
            people of all ages and backgrounds. <br></br>
            <br></br>
            Built using React Native and Expo for the front-end and Firebase for
            all the back-end including user authentication, image hosting,
            database storage and API calls.
          </text>
        </div>
      </div>
    </>
  );
}
