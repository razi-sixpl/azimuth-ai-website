import Image from "next/image";
import styles from "./LogoMarquee.module.css";

type Logo = { src: string; alt: string };

export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  // Two identical tracks give the marquee a seamless -50% loop.
  const track = [...logos, ...logos, ...logos];

  return (
    <div className={styles.viewport}>
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <div className={styles.group} key={copy} aria-hidden={copy === 1}>
            {track.map((logo, i) => (
              <div className={styles.item} key={`${copy}-${i}`}>
                <Image
                  src={logo.src}
                  alt={copy === 1 ? "" : logo.alt}
                  width={240}
                  height={120}
                  className={styles.logo}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
