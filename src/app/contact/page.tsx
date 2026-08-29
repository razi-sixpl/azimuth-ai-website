import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" crumb="contact" image="/images/Picture5.jpg" />

      <section className={`section ${styles.body}`}>
        <div className="row">
          <p className={styles.intro}>
            Please send us an email below for further inquiries.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
