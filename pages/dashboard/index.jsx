import styles from "./index.module.scss";
import Navbar2 from "../../components/navbar2";
import Sidebar from "../../components/sidebar/index";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { useEffect, useContext } from "react";

import AuthContext from "../../context/authContext";

export default function Index() {
  const { isLoggedIn } = useContext(AuthContext);
  const Router = useRouter();

  // LOGIN CHECK
  const loginCheck = () => {
    if (!isLoggedIn()) {
      Router.push("/login");
    }
  };

  useEffect(() => {
    loginCheck();
  }, []);

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
