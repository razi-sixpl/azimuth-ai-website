import Image from "next/image";
import type { NewsItem } from "@/data/news";
import styles from "./NewsCard.module.css";

export default function NewsCard({ item }: { item: NewsItem }) {
  const Heading = item.headingTag;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          alt={item.alt ?? ""}
          width={600}
          height={400}
          className={styles.image}
          style={item.imageWidth ? { width: `${item.imageWidth}px` } : undefined}
        />
      </div>
      <Heading
        className={item.headingTag === "h1" ? styles.titleLarge : styles.title}
      >
        {item.title}
      </Heading>
      <p className={styles.date}>{item.date}</p>
      <a
        className={styles.button}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </article>
  );
}
