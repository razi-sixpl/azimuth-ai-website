import type { Block } from "@/data/jobs";
import styles from "./JobBody.module.css";

function CheckIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 12.4l3.2 3.2L17 8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function JobBody({ body }: { body: Block[] }) {
  return (
    <div className={styles.body}>
      {body.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2
                key={i}
                className={styles.h2}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
          case "p":
            return (
              <p
                key={i}
                className={styles.p}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );
          case "ul":
            return (
              <ul key={i} className={styles.iconList}>
                {block.items.map((item, j) => (
                  <li key={j} className={styles.iconItem}>
                    <span className={styles.iconWrap}>
                      <CheckIcon />
                    </span>
                    <span
                      className={styles.iconText}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            );
          case "ulPlain":
            return (
              <ul key={i} className={styles.plainList}>
                {block.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
          case "spacer":
            return <p key={i} className={styles.spacer} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
