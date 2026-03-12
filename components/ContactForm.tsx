import styles from "./ContactForm.module.css";

export function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" />
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
        <textarea name="message" rows={6} />
      </label>
      <button type="submit" className={styles.submit}>Request a Private Consultation</button>
    </form>
  );
}
