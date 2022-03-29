import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.about}>
      <Navbar1 />
      <h1 className={styles.title}>Brief information about the company</h1>
    </div>
  );
}
