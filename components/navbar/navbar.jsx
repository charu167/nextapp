import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Button,
} from "react-bootstrap";
import logo from "../../assets/Logo/logo.png";
import logo1 from "../../assets/Logo/logo1.png";
import styles from "./navbar.module.scss";

export default function Navbar1() {
  const [navLinks, setNavLinks] = useState([
    { name: "Home", link: "/" },
    { name: "Pricing", link: "/pricing" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ]);

  const [dorpLinks, setDropLinks] = useState([
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Products", link: "/products" },
    { name: "Blog", link: "/blog" },
  ]);

  return (
    <Navbar
      className={`${styles.CustomNav} ${"sticky-top"}`}
      bg="transperant"
      variant="light"
      expand="lg"
    >
      <Container fluid className={`${styles.navCon} ${"px-4"}`}>
        <Navbar.Brand href="#home">
          <Image src={logo1} width={240} height={100} />
        </Navbar.Brand>

        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              {navLinks.map((e, i) => {
                return (
                  <Link key={i} passHref href={e.link}>
                    <Nav.Link className="mx-2">{e.name}</Nav.Link>
                  </Link>
                );
              })}

              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="mx-2"
              >
                {dorpLinks.map((e, i) => {
                  return (
                    <Link key={i} href={e.link} passHref>
                      <NavDropdown.Item>{e.name}</NavDropdown.Item>
                    </Link>
                  );
                })}
              </NavDropdown>
              <Link passHref href="#freetrial">
                <Nav.Link className="mx-2">
                  <Button variant="dark">Free Trial</Button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
