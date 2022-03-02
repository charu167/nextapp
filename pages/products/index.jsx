import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";

export default function Index() {
  return (
    <>
      <Navbar1 />
      <div className={styles.products}>
        <div className={styles.main}>
          <h1 className={styles.title}>Products</h1>
          <h4 className={styles.subtitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptate quas pariatur cupiditate nisi doloribus recusandae ipsa
            eum at. Amet perferendis unde tempore odit. Voluptatum?
          </h4>
        </div>
      </div>
    </>
  );
}
