import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useState } from "react";
import darrow from "../../assets/icons/downward-arrow.png";

export default function Sidebar() {
  const [kreate, setKreate] = useState([
    {
      name: "Text Summarizer",
      count: 50,
      link: "/dashboard/kreate/summarizer",
    },
    { name: "120 Word Summarizer", count: 50, link: "#" },
  ]);

  const [rekap, setRekap] = useState([
    { name: "Content Generator", count: 50, link: "/1" },
    { name: "Facebook Ad Generator", count: 50, link: "/2" },
    { name: "Tagline Generator", count: 50, link: "/3" },
    { name: "Email Generator", count: 50, link: "/4" },
    { name: "Description Generator", count: 50, link: "/5" },
    { name: "Headline Generator", count: 50, link: "/6" },
    { name: "Blog Title Generator", count: 50, link: "/7" },
    { name: "Blog Intro Generator", count: 50, link: "/8" },
    { name: "Blog Outro Generator", count: 50, link: "/9" },
  ]);

  return (
    <Container fluid className={styles.sidebar}>
      <Col>
        <Row>
          <h1 className={styles.title}>
            <span>Rekap</span>
            <span>
              <Image width={30} height={30} src={darrow} />
            </span>
          </h1>
          <div className={styles.links & styles.activate}>
            {kreate.map((e, i) => {
              return (
                <Link key={i} passHref href={e.link}>
                  <Nav.Link className={`${"mx-0 my-2 "} ${styles.products}`}>
                    <span className={styles.product}>{e.name}</span>
                    <span className={styles.product}>{e.count}</span>
                  </Nav.Link>
                </Link>
              );
            })}
          </div>
        </Row>
        <hr />
        <Row>
          <h1 className={styles.title}>Kreate</h1>
          {rekap.map((e, i) => {
            return (
              <Link key={i} passHref href={`/dashboard/rekap${e.link}`}>
                <Nav.Link className={`${"mx-0 my-2 "} ${styles.products}`}>
                  <span className={styles.product}>{e.name}</span>
                  <span className={styles.product}>{e.count}</span>
                </Nav.Link>
              </Link>
            );
          })}
        </Row>
      </Col>
    </Container>
  );
}
