import Image from "next/image";
import type { Metadata } from "next";
import HomeSlider from "@/components/HomeSlider";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Azimuth AI |",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeSlider />

      <section className={`section ${styles.focus}`}>
        <div className="row">
          <h1 className={styles.focusTitle}>OUR FOCUS</h1>
          <p className={styles.focusText}>
            Azimuth AI is an Embedded Silicon Product company developing highly
            differentiated ASICs for Edge Computing Applications.
          </p>
        </div>
      </section>

      <section className={`section ${styles.products}`}>
        <div className="row">
          <div className="grid grid--2">
            <div>
              <h1 className={styles.productsTitle}>PRODUCTS</h1>
              <p className={styles.productsText}>
                We’re thrilled to announce that Azimuth AI AI has reached a defining
                moment in our journey — our first “Hello World” after silicon power-on!
              </p>
              <p className={styles.productsText}>
                This marks the successful bring-up of our first-generation
                Platform-on-a-chip product ARKA-GKT1, designed to deliver intelligent,
                energy-efficient computing for smart utilities, industrial IoT, and
                connected infrastructure. From architecture to design to validation to
                tape-out to silicon bring up — every step of this journey carries the
                collective dedication and hard work of our team and partners to hit this
                milestone.
              </p>
            </div>
            <div className={styles.productsImageWrap}>
              <Image
                src="/images/1761262089214.jpg"
                alt=""
                width={916}
                height={516}
                className={styles.productsImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
