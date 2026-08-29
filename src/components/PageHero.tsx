import Link from "next/link";
import styles from "./PageHero.module.css";

type Props = {
  title: string;
  /** Text of the final (non-linked) breadcrumb crumb. */
  crumb: string;
  image: string;
  /** The job pages render their heading in dark navy; the top-level pages in pink. */
  variant?: "pink" | "dark";
};

export default function PageHero({ title, crumb, image, variant = "pink" }: Props) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={crumb}
    >
      <div className={styles.overlay} />
      <div className={`row row--wide ${styles.inner}`}>
        <h1
          className={variant === "dark" ? styles.titleDark : styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ul className={styles.crumbs}>
          <li>
            <Link href="/" className={styles.crumbLink}>
              Home
            </Link>
          </li>
          <li>{crumb}</li>
        </ul>
      </div>
    </section>
  );
}
