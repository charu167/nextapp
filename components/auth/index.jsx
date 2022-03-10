import styles from "./index.module.scss";
import Navbar1 from "../../components/navbar/navbar";
import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import pic_login from "../../assets/Pics/register.svg";
import pic_register from "../../assets/Pics/login.svg";
import logo1 from "../../assets/Logo/logo1.png";
import axios from "axios";
import { useState } from "react";

export default function Auth({
  api,
  input_group,
  pic,
  input_names,
  text,
  btn_text,
  push,
  title_text,
}) {
  const [input, setInput] = useState(input_group);
  const [spin, setSpin] = useState(0);

  const Router = useRouter();

  const handleClick = async (event) => {
    // for (let i = 0; i < input_names.lenght; i++) {
    //   if (input[input_names[i]] === "") {
    //     console.log("Please fill all the details");
    //   }
    // }
    event.preventDefault();

    setSpin(1);

    const formdata = new FormData();
    for (let i = 0; i < input_names.length; i++) {
      formdata.append(input_names[i].name, input[input_names[i].name]);
    }

    console.log(formdata);
    await axios
      .post("http://18.117.194.28/" + api, formdata)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("expiry", res.data.expiry);
        localStorage.setItem("token", res.data.token);
        setSpin(0);
        if (localStorage.getItem("token")) {
          Router.push(push);
        }
      })
      .catch((err) => {
        console.log(err);
        setSpin(0);
      });
  };

  return (
    <>
      <Navbar1 />
      <div className={styles.auth}>
        <Container className={`${styles.mainContainer}`}>
          <Row>
            <Col className={styles.col1}>
              <Image
                className={styles.img}
                src={pic !== "login" ? pic_login : pic_register}
              />
              {/* <span className={styles.text}>{text}</span> */}
            </Col>
            <Col className={`${styles.mainForm} ${""}`}>
              <Image src={logo1} width={360} height={150} />
              <Form
                className={`${
                  styles.frm
                } ${" d-flex flex-column justify-content-start p-5 "}`}
              >
                <h3 className="mb-3">{title_text}</h3>
                {input_names.map((e, i) => {
                  return (
                    <Form.Group
                      key={i}
                      className="mb-4"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        onChange={(event) => {
                          setInput({
                            ...input,
                            [e.name]: event.target.value,
                          });
                        }}
                        type={e.type}
                        placeholder={e.placeholder}
                      />
                    </Form.Group>
                  );
                })}

                <Button
                  onClick={handleClick}
                  variant="dark"
                  className={styles.butt}
                  size="lg"
                >
                  {spin === 1 ? <Spinner animation="border" /> : btn_text}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
