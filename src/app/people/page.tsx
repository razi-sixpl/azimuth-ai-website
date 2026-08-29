import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import { LEADERSHIP, ADVISORS, BOARD } from "@/data/people";
import styles from "./people.module.css";

export const metadata: Metadata = {
  title: "People",
  alternates: { canonical: "/people/" },
};

export default function PeoplePage() {
  return (
    <>
      <PageHero title="People" crumb="People" image="/images/Picture3.jpg" />

      <section className={`section ${styles.light}`}>
        <div className="row">
          <h2 className={styles.groupTitle}>LEADERSHIP TEAM</h2>
          <div className="grid grid--3">
            {LEADERSHIP.map((p) => (
              <PersonCard key={`lead-${p.name}`} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.grey}`}>
        <div className="row">
          <h2 className={styles.groupTitle}>ADVISORS</h2>
          <div className="grid grid--3">
            {ADVISORS.map((p) => (
              <PersonCard key={`adv-${p.name}`} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.light}`}>
        <div className="row">
          <h2 className={styles.groupTitle}>BOARD OF DIRECTORS</h2>
          <div className="grid grid--3">
            {BOARD.map((p, i) => (
              <PersonCard key={`board-${i}-${p.name}`} person={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
