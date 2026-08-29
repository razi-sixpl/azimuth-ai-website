import { COPYRIGHT } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="row row--footer">
        <p className={styles.copy}>{COPYRIGHT}</p>
      </div>
    </footer>
  );
}
