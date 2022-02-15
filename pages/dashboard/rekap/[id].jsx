import { useRouter } from "next/router";
import styles from "./id.module.scss";
import Navbar2 from "../../../components/navbar2";
import Sidebar from "../../../components/sidebar";
import { Form, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import data from "./data";

export default function Rekap() {
  const router = useRouter();

  //Usefull Usestates
  const [localData, setLocalData] = useState({
    input_group: {},
    input_count: null,
    api: "#",
    input_names: [{ name: "", count: null, placeholder: "" }],
    title: "",
    product_id: 0,
  });
  const [spin, setSpin] = useState(0);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState(localData.input_group);
  const [count, setCount] = useState(50);
  const [id, setId] = useState(router.query.id);
  console.log(input);

  useEffect(() => {
    //Setting Local Data

    const handleData = () => {
      setLocalData(data[router.query.id - 1]);
      if (router.query.id !== id) {
        setId(router.query.id);
        setInput(null);
      }
    };

    //Login Check
    const handleNavigate = () => {
      const d = new Date();
      if (
        localStorage.getItem("expiry") === null ||
        d.getTime() > Date.parse(localStorage.getItem("expiry"))
      ) {
        // router.push("/login");
      } else {
      }
    };
    handleData();
    // handleNavigate();
  });

  //Count
  useEffect(() => {
    const checkCount = async () => {
      await axios
        .get("http://18.117.194.28/callback/", {
          params: {
            productid: localData.product_id,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCount(res.data.count);
          if (res.data.count <= 0) {
            router.push("/dashboard");
          }
        })
        .catch((err) => [console.log(err)]);
    };
    // checkCount();
  }, []);

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
      .post("http://18.117.194.28/" + localData.api, formdata)
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
        <h1 className={styles.title}>{localData.title}</h1>
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

              {localData.input_names.map((e, i) => {
                return (
                  <>
                    <Form.Control
                      key={i}
                      as="textarea"
                      rows={e.count}
                      placeholder={e.placeholder}
                      // value={input[localData.input_names.name]}
                      onChange={(event) => {
                        setInput({ ...input, [e.name]: event.target.value });
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
        {output === "" ? null : (
          <div className={styles.output}>
            <div className={styles.text}>{output}</div>
          </div>
        )}
      </div>
    </div>
  );
}
