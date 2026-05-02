import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";

export default function Contact() {
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
        <div className={styles.contactBody}>
          <p>
            Wanna send me an email?<br></br>
            Or tell me about your day? <br></br>
            Or send me photos of your pet?
          </p>
        </div>
        <div className={styles.CTA}>
          <Link href="mailto:kelvinkml@live.com">Don&apos;t be shy!</Link>
        </div>
      </div>
    </>
  );
}
