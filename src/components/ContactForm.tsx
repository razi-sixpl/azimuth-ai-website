"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !body.ok) {
        setStatus("error");
        setMessage(body.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setMessage("Thanks for contacting us");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
        <p className={styles.fieldHalf}>
          <label htmlFor="contact-name" className={styles.label}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={styles.input}
            placeholder="Name"
            required
          />
        </p>
        <p className={`${styles.fieldHalf} ${styles.fieldLast}`}>
          <label htmlFor="contact-email" className={styles.label}>
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="Email Address"
            required
          />
        </p>
        <p className={styles.fieldHalf}>
          <label htmlFor="contact-phone" className={styles.label}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="text"
            className={styles.input}
            placeholder="Phone"
            pattern="[0-9\s\-]*"
            title="Only numbers allowed."
            required
          />
        </p>
        <p className={`${styles.fieldHalf} ${styles.fieldLast}`}>
          <label htmlFor="contact-subject" className={styles.label}>
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className={styles.input}
            placeholder="Subject"
            required
          />
        </p>
        <p className={styles.field}>
          <label htmlFor="contact-message" className={styles.label}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            className={styles.textarea}
            placeholder="Message"
            required
          />
        </p>

        {/* honeypot — hidden from people, catches naive bots */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className={styles.honeypot}
          aria-hidden="true"
        />

        <div className={styles.bottom}>
          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? "SENDING…" : "SEND"}
          </button>
        </div>

        {message ? (
          <p
            className={status === "error" ? styles.error : styles.success}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
