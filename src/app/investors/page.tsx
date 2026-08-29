import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsCard from "@/components/NewsCard";
import LogoMarquee from "@/components/LogoMarquee";
import { NEWS, INVESTOR_LOGOS } from "@/data/news";
import styles from "./investors.module.css";

export const metadata: Metadata = {
  title: "Investors",
  alternates: { canonical: "/investors/" },
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero title="Investors" crumb="Investors" image="/images/comingSoon.jpg" />

      <section className={styles.newsroom}>
        <div className="row">
          <h2 className={styles.newsroomTitle}>NewsRoom</h2>
          <div className={`grid grid--3 ${styles.newsGrid}`}>
            {NEWS.map((item) => (
              <NewsCard key={item.href + item.date} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.investors}>
        <div className="row">
          <h2 className={styles.investorsTitle}>Investors</h2>
        </div>
        <div className="row">
          <LogoMarquee logos={INVESTOR_LOGOS} />
        </div>
      </section>
    </>
  );
}
