import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
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
import offsetContext from "../../context/offsetContext";
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

  const [yoffset1, setYoffset1] = useState(0);

  const { yoffset } = useContext(offsetContext);

  useEffect(() => {
    setYoffset1(yoffset);
  });

  return (
    <Navbar
      className={`${styles.CustomNav} ${"fixed-top"} ${
        yoffset1 > 20 ? styles.scrolled : null
      }`}
      bg="transperant"
      variant="light"
      expand="lg"
    >
      <Container fluid className={`${styles.navCon} ${"px-4"}`}>
        <Navbar.Brand href="#home">
          <Image
            src={yoffset1 > 20 ? logo1 : logo}
            width={yoffset1 > 20 ? 168 : 240}
            height={yoffset1 > 20 ? 70 : 100}
          />
        </Navbar.Brand>

        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center">
              {navLinks.map((e, i) => {
                return (
                  <Link key={i} passHref href={e.link}>
                    <Nav.Link
                      style={
                        yoffset1 > 20
                          ? {
                              color: "black",
                              trasition: "all 0.3s ease-in-out",
                            }
                          : {
                              color: "white",
                              trasition: "all 0.3s ease-in-out",
                            }
                      }
                      className="mx-2"
                    >
                      {e.name}
                    </Nav.Link>
                  </Link>
                );
              })}

              <NavDropdown
                title={
                  <span
                    style={
                      yoffset1 > 20
                        ? {
                            color: "black",
                            trasition: "all 0.3s ease-in-out",
                          }
                        : {
                            color: "white",
                            trasition: "all 0.3s ease-in-out",
                          }
                    }
                  >
                    More
                  </span>
                }
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
                  <Button variant={yoffset1 > 20 ? "dark" : "light"}>
                    Free Trial
                  </Button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
