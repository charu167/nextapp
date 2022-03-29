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
import { useEffect, useState } from "react";
import darrow from "../../assets/icons/darrow.png";

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

  const [products, setProducts] = useState([
    {
      title: "Marketing",
      activate: false,
      items: [
        { name: "Content Generator", count: 20, link: "/1" },
        { name: "Facebook Ad Generator", count: 20, link: "/2" },
        { name: "Tagline Generator", count: 20, link: "/3" },
      ],
    },
    {
      title: "Academia",
      activate: false,
      items: [
        { name: "Email Generator", count: 20, link: "/4" },
        { name: "Description Generator", count: 20, link: "/5" },
        { name: "Headline Generator", count: 20, link: "/6" },
      ],
    },
    {
      title: "Enterprise",
      activate: false,
      items: [
        { name: "Blog Title Generator", count: 20, link: "/7" },
        { name: "Blog Intro Generator", count: 20, link: "/8" },
        { name: "Blog Outro Generator", count: 20, link: "/9" },
      ],
    },
    {
      title: "Summarizer",
      activate: false,
      items: [{ name: "Summarizer", count: 20, link: "/summarizer" }],
    },
  ]);

  return (
    <Container fluid className={styles.sidebar}>
      <Col>
        {products.map((e, i) => {
          return (
            <Row key={i} className={styles.row}>
              <h1
                onClick={() => {
                  setProducts(
                    products.map((es, is) =>
                      e.title === es.title
                        ? {
                            ...es,
                            activate: !es.activate,
                          }
                        : es
                    )
                  );
                }}
                className={styles.title}
              >
                <span>{e.title}</span>
                <span>
                  <Image src={darrow} height={23} width={18} />
                </span>
              </h1>
              <div
                className={`${styles.section} ${
                  e.activate === true ? styles.activate : null
                }`}
              >
                {e.items.map((e1, i1) => {
                  return (
                    <Link
                      key={i1}
                      passHref
                      href={`/dashboard/product${e1.link}`}
                    >
                      <Nav.Link
                        className={`${"mx-0 my-2 "} ${styles.products}`}
                      >
                        <span className={styles.product}>{e1.name}</span>
                        <span className={styles.product}>{e1.count}</span>
                      </Nav.Link>
                    </Link>
                  );
                })}
              </div>
            </Row>
          );
        })}
      </Col>
    </Container>
  );
}
