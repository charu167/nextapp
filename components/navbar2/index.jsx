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
import profilePic from "../../assets/dev/profile1.jpg";
import styles from "./index.module.scss";

export default function Navbar2() {
  return (
    <Navbar
      className={`${styles.CustomNav} ${"fixed-top"}`}
      bg="transperant"
      variant="light"
      expand="lg"
    >
      <Container fluid className={`${styles.navCon} ${"px-4"}`}>
        <Navbar.Brand href="#home">
          <Link passHref href="/">
            <Image src={logo1} width={240} height={100} />
          </Link>
        </Navbar.Brand>

        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              <Link passHref href="#Upgrade">
                <Nav.Link className="mx-2">
                  <Button variant="dark">Upgrade</Button>
                </Nav.Link>
              </Link>

              <Link passHref href="#Upgrade">
                <Nav.Link className="mx-2">
                  <div className={styles.profile}>
                    <Image src={profilePic} />
                  </div>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
