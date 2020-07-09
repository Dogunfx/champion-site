import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPlay,
  faHeart,
  faMoneyCheck
} from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <Container fluid>
      <Row>
        <Col className="mr-auto">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img
                src="/images/rccg-logo.png"
                alt=""
                width="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faHome} className="fa" />
                    </Col>
                    <Col>
                      <label>About Us</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faUser} className="fa" />
                    </Col>
                    <Col>
                      <label>Connect</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faPlay} className="fa" />
                    </Col>
                    <Col>
                      <label>Watch</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faHeart} className="fa" />
                    </Col>
                    <Col>
                      <label>Church Care</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faMoneyCheck} className="fa" />
                    </Col>
                    <Col>
                      <label>Give</label>
                    </Col>
                  </Row>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs={2}>
          <div className="p-3">
            <img
              src="/images/logo.png"
              alt=""
              width="80"
              className="d-inline-block align-top "
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
