import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.blog}>
      <Navbar1 />
      <h1 className={styles.title}>Blog Section</h1>
    </div>
  );
}
