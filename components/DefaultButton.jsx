import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultButton({ content, icon }) {
  return (
    <Container className="default-button  btn-icon">
      <FontAwesomeIcon icon={icon} className="fa icon" />
      <div className=" text">{content}</div>
    </Container>
  );
}
