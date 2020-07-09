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
  faCalendar,
  faAlignJustify,
  faMoneyCheck
} from "@fortawesome/free-solid-svg-icons";
import CustomizedSwitches from "../components/SwitchComponent";

export default function NavBar() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col className="mr-auto ">
          <Navbar bg="" variant="dark" expand="lg" className="myBar">
            <Navbar.Brand href="#home">
              <img
                src="/images/rccg-logo.png"
                alt=""
                width="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="primary-color-text "
            />
            <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
              <Nav className="ml-auto bar">
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
                <Nav.Link href="#Connect">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faUser} className="fa" />
                    </Col>
                    <Col>
                      <label>Connect</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#watch">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faPlay} className="fa" />
                    </Col>
                    <Col>
                      <label>Watch</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#Church">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faHeart} className="fa" />
                    </Col>
                    <Col>
                      <label>Church Care</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#calendar">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faCalendar} className="fa" />
                    </Col>
                    <Col>
                      <label>Church Calendar</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#give" className="active">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faMoneyCheck} className="fa" />
                    </Col>
                    <Col>
                      <label>Give</label>
                    </Col>
                  </Row>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Row>
                    <Col xs={2}>
                      <FontAwesomeIcon icon={faAlignJustify} className="fa" />
                    </Col>
                  </Row>
                </Nav.Link>
                <CustomizedSwitches />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col sm={1} className="col-3">
          <Row className="align-items-center">
            <Col>
              <div className="p-3 text-right ">
                <img
                  src="/images/logo.png"
                  alt=""
                  width="80"
                  className="d-inline-block align-middle"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
