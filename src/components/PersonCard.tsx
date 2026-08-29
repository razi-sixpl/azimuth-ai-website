import Image from "next/image";
import type { Person } from "@/data/people";
import LinkedInIcon from "./LinkedInIcon";
import styles from "./PersonCard.module.css";

export default function PersonCard({ person }: { person: Person }) {
  const Heading = person.headingTag ?? "h2";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={person.image}
          alt={person.alt ?? ""}
          width={336}
          height={336}
          className={styles.image}
        />
      </div>
      <Heading className={styles.name}>{person.name}</Heading>
      <div className={styles.role}>
        {person.role.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <ul className={styles.social}>
        <li>
          <a
            href={person.linkedin}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </article>
  );
}
