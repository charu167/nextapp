import Navbar1 from "../../components/navbar/navbar";
import styles from "./index.module.scss";
import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import tick from "../../assets/icons/checkmark.png";
import Image from "next/image";
import data from "./data";
import { useState } from "react";

export default function index() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <Navbar1 />

      <div className={styles.main}>
        <h1 className={styles.title}>Pricing Structure</h1>
        <h4 className={styles.subtitle}>
          Get unlimited copy and ideas with our enterprise plan.{" "}
        </h4>

        <div className={styles.toggle}>
          <label className={styles.switch}>
            <input
              onClick={() => {
                setYearly(!yearly);
              }}
              type="checkbox"
              name="toggle"
            />
            <span className={styles.slider}>
              <span className={styles.sliderText}>Monthly</span>
              <span className={styles.sliderText}>Yearly</span>
            </span>
          </label>
        </div>
        <Container fluid>
          <Row>
            {data.map((e, i) => {
              return (
                <Col key={i}>
                  <Card style={{ width: "21rem" }}>
                    <Card.Body
                      className={`${
                        styles.cbody
                      } ${"d-flex flex-column align-items-center p-5"}`}
                    >
                      <Card.Title className={`${"mb-4 "} ${styles.ctitle}`}>
                        {e.planName}
                      </Card.Title>
                      <Card.Subtitle
                        className={`${"mb-3 mt-2"} ${styles.price}`}
                      >
                        {yearly
                          ? `$ ${e.costPerYear}/year`
                          : `$ ${e.costPerMonth}/month`}{" "}
                      </Card.Subtitle>
                      <Card.Text className="text-muted text-center">{e.desc}</Card.Text>
                    </Card.Body>
                    <ListGroup className={`${"list-group-flush"} ${styles.cd}`}>
                      <Container fluid>
                        <Col className="d-flex flex-column align-items-start px-0 py-3">
                          {e.services.map((e1, i1) => {
                            return (
                              <Row
                                key={i1}
                                className={`${styles.detail} ${"my-2"}`}
                              >
                                <Col className="d-flex">
                                  <div className={styles.imgContainer}>
                                    <Image src={tick} width={25} height={25} />
                                  </div>
                                  <div className={styles.serviceContainer}>
                                    {e1}
                                  </div>
                                </Col>
                              </Row>
                            );
                          })}
                        </Col>
                      </Container>
                    </ListGroup>
                    <Card.Body>
                      <Button size="lg" variant="dark" className={styles.butt}>
                        Choose Plan
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
