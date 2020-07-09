import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DefaultButton({ content, icon, bg }) {
  return (
    <span className={`default-button  btn-icon ${bg}`}>
      <FontAwesomeIcon icon={icon} className={`fa icon `} />
      <div className=" text">{content}</div>
    </span>
  );
}
