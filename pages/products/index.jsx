import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <div className={styles.products}>
      <Navbar1 />
      <h1 className={styles.title}>
        Information about our main products, categories and small demo
      </h1>
    </div>
  );
}
