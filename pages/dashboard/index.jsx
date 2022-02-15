import styles from "./index.module.scss";
import Navbar2 from "../../components/navbar2";
import Sidebar from "../../components/sidebar/index";
import { Container } from "react-bootstrap";

export default function index() {
  return (
    <div>
      <Navbar2 />
      <Sidebar />
      <div className={styles.main}>
        <h1>WORKSPACE</h1>
      </div>
    </div>
  );
}
