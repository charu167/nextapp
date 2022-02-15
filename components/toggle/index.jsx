import styles from "./index.module.scss";

export default function Toggle({ label }) {
  return (
    <div className={styles.toggle}>
      <label className={styles.switch}>
        <input type="checkbox" name="toggle" />
        <span className={styles.slider} />
      </label>
      <label className={styles.text} htmlFor="toggle">{label}</label>
    </div>
  );
}
