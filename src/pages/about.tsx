import Head from "next/head";
import styles from "@/styles/About.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function About() {
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
          <p>A little more about me...</p>
        </div>
        <div className={styles.aboutMe}>
          <p>
            Born in a weird time — old enough to remember a world without the
            internet, young enough to have grown up into it. I explored, I took
            things apart, I looked with my eyes and my hands (sorry mum).<br></br>
            <br></br>
            Then I got my hands on a computer. I didn&apos;t take this one
            apart. I read, watched, and gradually started building things.<br></br>
            <br></br>
            A Photography BA changed how I see everything. When you spend three
            years thinking carefully about what belongs in the frame and what
            doesn&apos;t, it rewires how you approach problems — digital or
            otherwise.<br></br>
            <br></br>
            These days I work as a UCaaS faults specialist — diagnosing and
            resolving issues in cloud communications systems. It&apos;s
            sharpened my appreciation for infrastructure that&apos;s robust,
            well-documented, and doesn&apos;t fall apart under pressure. Which,
            as it turns out, is also a good description of good software.<br></br>
            <br></br>
            Away from the screen, I make bags — by hand, from scratch. It turns
            out pattern-cutting and component architecture have more in common
            than you&apos;d think. Both start with a plan, require assembling
            parts in the right order, and punish you the moment something
            doesn&apos;t line up.
          </p>
        </div>
      </div>
    </>
  );
}
