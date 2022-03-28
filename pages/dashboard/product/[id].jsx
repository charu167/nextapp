import { useRouter } from "next/router";
import styles from "./id.module.scss";
import Navbar2 from "../../../components/navbar2";
import Sidebar from "../../../components/sidebar";
import { Form, Button, Spinner } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { data } from "./data";

import AuthContext from "../../../context/authContext";

export default function Rekap() {
  const { isLoggedIn } = useContext(AuthContext);
  const Router = useRouter();

  //LOGIN CHECK
  const loginCheck = () => {
    if (!isLoggedIn()) {
      Router.push("/login");
    }
  };

  //Useful Usestates
  const [localData, setLocalData] = useState(null);
  const [spin, setSpin] = useState(0);
  const [output, setOutput] = useState(null);
  const [input, setInput] = useState(null);
  const [count, setCount] = useState(null);
  const [id, setId] = useState(null);

  //SETTING LOCAL DATA
  const handleData = () => {
    if (checkID()) {
      setLocalData(data[Router.query.id - 1]);
      // console.log(localData);
    } else {
      return;
    }
  };

  //CHECK ID
  const checkID = () => {
    setId(Router.query.id);
    if (id === Router.query.id) {
      return true;
    } else {
      return false;
    }
  };

  //COUNT
  const checkCount = async () => {
    await axios
      .get("http://18.117.194.28/callback/", {
        params: {
          productid: localData === null ? null : localData.product_id,
        },
        headers: {
          authorization: "Bearer " + localStorage.getItem("access"),
        },
      })
      .then((res) => {
        setCount(res.data.count);
        if (res.data.count <= 0) {
          Router.push("/dashboard");
        }
      })
      .catch((err) => [console.log(err)]);
  };

  useEffect(() => {
    handleData();
    // loginCheck();
    checkCount();
    checkID();
  });

  //Generator Funtion
  const handleGenerator = async (event) => {
    setSpin(1);

    const formdata = new FormData();
    for (let i = 0; i < localData.input_count; i++) {
      formdata.append(
        localData.input_names[i].name,
        input[localData.input_names[i].name]
      );
    }

    await axios
      .post("http://18.117.194.28/" + localData.api, formdata, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("access")
        }
      })
      .then((res) => {
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
        <h1 className={styles.title}>
          {localData === null ? null : localData.title}
        </h1>
        <div className={styles.input}>
          <div className={styles.left}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="d-flex justify-content-between">
                <span className={styles.tx}> Place your text here</span>
                <span className={styles.count}>
                  <span>{count}</span> Runs Remaining
                </span>
              </Form.Label>

              {localData === null
                ? null
                : localData.input_names.map((e, i) => {
                    return (
                      <>
                        <Form.Control
                          key={i}
                          as="textarea"
                          rows={e.count}
                          placeholder={e.placeholder}
                          // value={input[localData.input_names.name]}
                          onChange={(event) => {
                            setInput({
                              ...input,
                              [e.name]: event.target.value,
                            });
                          }}
                        />
                        <br />
                      </>
                    );
                  })}
            </Form.Group>
            <Button
              onClick={handleGenerator}
              variant="dark"
              className={styles.butt}
              size="lg"
            >
              {spin === 0 ? (
                "Generate"
              ) : (
                <>
                  <span style={{ "margin-right": "20px" }}>
                    Generating Content . . .
                  </span>
                  <Spinner animation="border" />
                </>
              )}
            </Button>
          </div>
        </div>
        <hr />
        {output === null ? null : (
          <div className={styles.output}>
            <div className={styles.text}>{output}</div>
          </div>
        )}
      </div>
    </div>
  );
}
