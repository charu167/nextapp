import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import Navbar1 from "../components/navbar/navbar";
import brain from "../assets/Pics/brain.png";
import netflix from "../assets/icons/netflix.webp";
import OffsetContext from "../context/offsetContext";
import AuthContext from "../context/authContext";

export default function Home() {
  const { yoffset } = useContext(OffsetContext);
  const [yoffset1, setYoffset1] = useState(0);

  const { isLoggedIn, refreshToken } = useContext(AuthContext);

  useEffect(() => {
    setYoffset1(yoffset);
  });

  return (
    <>
      <Navbar1 />
      <div className={styles.home}>
        <div className={styles.hero}>
          <Container className="m-0">
            <Row>
              <Col>
                <h1 className={styles.title}>
                  {/* <button
                    onClick={() => {
                      refreshToken();
                    }}
                  >
                    Refresh
                  </button> */}
                  <span id={styles.id1}>Rekap and Kreate</span>
                  <span id={styles.id2}>The Future of AI Copywriting</span>
                </h1>
                <h4 className={styles.subtitle}>
                  Authorly.AI is an Intelligent Workforce Platform that
                  transforms contact centers by infusing AI into 100% of
                  customer conversations, optimizing agent performance and
                  automating repeatable workflows that drive revenue and
                  retention.
                </h4>
              </Col>
              <Col className={styles.heroPic}>
                <Image src={brain} width={500} height={375} />
              </Col>
            </Row>
            <Row className={styles.heroBottom}>
              <Col>
                <Link href={isLoggedIn() ? "/dashboard" : "#"} passHref>
                  <Button className={`${styles.butt1}`} variant="dark">
                    {isLoggedIn() ? "Go to Dashboard" : "start free trial"}
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link href="#" passHref>
                  <Button
                    className={`${styles.butt1}`}
                    id={styles.b2}
                    variant="dark"
                  >
                    See Preview
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.clients}>
          <Container>
            <Row className="d-flex justify-content-around">
              <Image src={netflix} width={300} height={160} />
              <Image src={netflix} width={300} height={160} />
              <Image src={netflix} width={300} height={160} />
              <Image src={netflix} width={300} height={160} />
              <Image src={netflix} width={300} height={160} />
            </Row>
          </Container>
        </div>

        <div className={styles.howitworks}>
          <h1 className={styles.title}>How it works</h1>
          <Container>
            <Row
              className={`${styles.step} my-2 ${
                yoffset1 > 1000 ? styles.slide : null
              }`}
            >
              <h2>Step 1</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat voluptas ducimus sunt incidunt, corporis consequatur
                molestias ab sit, vitae id nostrum similique blanditiis rerum.
                Nostrum?
              </p>
            </Row>
            <Row
              className={`${styles.step} my-2 ${
                yoffset1 > 1000 ? styles.slide : null
              }`}
            >
              <h2>Step 2</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat voluptas ducimus sunt incidunt, corporis consequatur
                molestias ab sit, vitae id nostrum similique blanditiis rerum.
                Nostrum?
              </p>
            </Row>
            <Row
              className={`${styles.step} my-2 ${
                yoffset1 > 1000 ? styles.slide : null
              }`}
            >
              <h2>Step 3</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat voluptas ducimus sunt incidunt, corporis consequatur
                molestias ab sit, vitae id nostrum similique blanditiis rerum.
                Nostrum?
              </p>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
