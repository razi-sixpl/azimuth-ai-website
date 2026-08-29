import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LogoMarquee from "@/components/LogoMarquee";
import { PARTNER_LOGOS } from "@/data/news";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About us",
  alternates: { canonical: "/about-us/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About US" crumb="About us" image="/images/Picture1.jpg" />

      <section className={`section ${styles.mission}`}>
        <div className="row">
          <h1 className={styles.missionTitle}>Our Mission</h1>
          <p className={styles.missionText}>
            Our mission is to develop cutting-edge silicon products that not only
            champion environmental sustainability but also facilitate affordable access
            to computing solutions in cost-challenged markets, with a focus on embedded
            computing silicon products. Through our unwavering commitment to
            eco-friendly innovation and the expansion of technology access, we aspire to
            empower individuals and communities around the world, bridging the divide
            between technological progress and economic inclusivity.
          </p>
        </div>
      </section>

      <section className={`section ${styles.team}`}>
        <div className="row">
          <Image
            src="/images/Picture2.jpg"
            alt="image"
            width={960}
            height={540}
            className={styles.teamImage}
          />
          <div className={styles.teamCopy}>
            <h1 className={styles.teamTitle}>
              Our Team has built over 30 Semiconductor Products
            </h1>
            <p className={styles.teamText}>
              Azimuth has a collective 100 years of experience building technology
              products. We have team members based in California, USA and Hyderabad,
              India
            </p>
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className="row">
          <h2 className={styles.partnersTitle}>Partners</h2>
        </div>
        <div className="row">
          <LogoMarquee logos={PARTNER_LOGOS} />
        </div>
      </section>
    </>
  );
}
