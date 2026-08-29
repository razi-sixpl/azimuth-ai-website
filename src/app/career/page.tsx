import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JobCard from "@/components/JobCard";
import { JOBS } from "@/data/jobs";
import { HR_EMAIL } from "@/data/site";
import styles from "./career.module.css";

export const metadata: Metadata = {
  title: "Career",
  alternates: { canonical: "/career/" },
};

export default function CareerPage() {
  return (
    <>
      <PageHero title="Careers" crumb="careers" image="/images/Picture4.jpg" />

      <section className={`section ${styles.jobs}`}>
        <div className="row">
          <div className="grid grid--3">
            {JOBS.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </div>
        <div className="row row--wide">
          <p className={styles.resume}>
            Share your resume to{" "}
            <a href={`mailto:${HR_EMAIL}`} className={styles.mail}>
              {HR_EMAIL}
            </a>
            , and a recruiter will get in touch with you.
          </p>
        </div>
      </section>
    </>
  );
}
