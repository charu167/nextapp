import { useRouter } from "next/router";
import styles from "./id.module.scss";
import Navbar2 from "../../../../components/navbar2";
import Sidebar from "../../../../components/sidebar";
import { Form, Button, Spinner } from "react-bootstrap";
import Toggle from "../../../../components/toggle";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import AuthContext from "../../../../context/authContext";

export default function Kreate() {
  const { isLoggedIn } = useContext(AuthContext);
  const Router = useRouter();
  const query = Router.query;

  const [spin, setSpin] = useState(0);

  const [input, setInput] = useState({
    text: "",
    ratio: 0.2,
  });

  const [output, setOutput] = useState("");

  //LOGIN CHECK
  const loginCheck = () => {
    if (!isLoggedIn()) {
      Router.push("/login");
    }
  };

  useEffect(() => {
    loginCheck();
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    setSpin(1);

    const formdata = new FormData();
    formdata.append("text", input.text);
    formdata.append("ratio", input.ratio);

    await axios
      .post("http://18.117.194.28/text_summarizer/", formdata, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.content);
        setSpin(0);
      })
      .catch((err) => {
        console.log(err);
        setSpin(0);
      });
  };

  return (
    <div>
      <Navbar2 />
      <Sidebar />

      <div className={styles.kreate}>
        <h1 className={styles.title}>Summarizer</h1>
        <div className={styles.input}>
          <div className={styles.left}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <span> Place your text here</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter at least one paragraph"
              />
            </Form.Group>
            <Button
              onClick={handleClick}
              variant="dark"
              className={styles.butt}
              size="lg"
            >
              {spin === 0 ? "Summarize" : <Spinner animation="border" />}
            </Button>
          </div>

          <div className={styles.right}>
            <Toggle label="Generate Keywords" />
            <Toggle label="Generate Audio Book" />
            <select className={styles.sel} name="ratio" id="">
              <option value={0.2}>Size (Default 20%) </option>
              <option value={0.2}>20%</option>
              <option value={0.4}>40%</option>
              <option value={0.6}>60%</option>
              <option value={0.8}>80%</option>
            </select>
          </div>
        </div>
        <hr />
        {output === "" ? null : (
          <div className={styles.output}>
            <div className={styles.text}>{output}</div>
          </div>
        )}
      </div>
    </div>
  );
}
