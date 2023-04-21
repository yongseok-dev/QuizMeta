import React from "react";
import { Col, Row } from "react-bootstrap";

const PageTitle = ({ children }) => {
  return (
    <Row>
      <Col>
        <h1 className="text-center mb-4">{children}</h1>
      </Col>
    </Row>
  );
};

export default PageTitle;
