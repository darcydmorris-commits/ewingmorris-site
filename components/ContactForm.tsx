"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

const FORMSPREE_ID = "FORM_ID"; // Replace with your Formspree form ID

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <h3>Thank you.</h3>
        <p>We&rsquo;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label className={styles.field}>
          <span>Inquiry Type</span>
          <select name="inquiryType" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Private Wealth</option>
            <option>Fund Strategies</option>
            <option>Institutional</option>
            <option>Careers</option>
            <option>Media</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending\u2026" : "Request a Private Consultation"}
      </button>
      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@ewingmorris.com">info@ewingmorris.com</a>.
        </p>
      )}
    </form>
  );
}
