import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function index() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("email", input.email);
    formdata.append("message", input.message);
    await axios
      .post("#", formdata)
      .then((res) => {
        if (res.data === 1) {
          window.alert("We have recieved your message! will get back to soon.");
        } else {
          window.alert("Uh oh! Something went wrong.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar1 />
      <div className={styles.contact}>
        <Form className={`${styles.frm} mt-5 p-5`}>
          <Container>
            <h1 className={`${styles.title} mb-2`}>Contact Us</h1>
            <h4 className={`${styles.subtitle} mb-5`}>
              How can we help you out? If you fill out the form below, we will
              try to get back to you ASAP!
            </h4>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      setInput({ ...input, ["name"]: event.target.value });
                    }}
                    type="text"
                    placeholder="John Doe"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(event) => {
                      setInput({ ...input, ["email"]: event.target.value });
                    }}
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setInput({ ...input, ["message"]: event.target.value });
                }}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              variant="dark"
              className={styles.butt}
            >
              Submit
            </Button>
          </Container>
        </Form>
      </div>
    </>
  );
}
