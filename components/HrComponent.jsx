import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function HRSection({ children, title }) {
  return (
    <div className="hr-section">
      <Container>
        <Row>
          <Col>
            <hr />
          </Col>
          <Col>
            <div className="text-center hr-heading">
              <h5>{title}</h5>
            </div>
          </Col>
          <Col>
            <hr />
          </Col>
        </Row>
        <div>{children}</div>
      </Container>
    </div>
  );
}
