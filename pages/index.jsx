import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import Navbar1 from "../components/navbar/navbar";
import brain from "../assets/Pics/brain.png";
import netflix from "../assets/icons/netflix.webp";
// import tesla from "https://cdn.worldvectorlogo.com/logos/tesla-9.svg";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <div className={styles.home}>
        <div className={styles.hero}>
          <Container className="m-0">
            <Row>
              <Col>
                <h1 className={styles.title}>
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
                <Link href="#" passHref>
                  <Button className={`${styles.butt1}`} variant="dark">
                    Start Free trial
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
      </div>
    </>
  );
}
