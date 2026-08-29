import Image from "next/image";
import Link from "next/link";
import type { Job } from "@/data/jobs";
import styles from "./JobCard.module.css";

export default function JobCard({ job }: { job: Job }) {
  const href = `/${job.slug}/`;

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
        <Image
          src="/images/Picture4.jpg"
          alt=""
          width={1227}
          height={850}
          className={styles.image}
        />
      </Link>
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: job.cardTitle }}
      />
      <Link href={href} className={styles.more}>
        Read More&nbsp; →
      </Link>
    </article>
  );
}
