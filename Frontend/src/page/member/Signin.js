import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

function Signin() {
  return (
    <Container>
      <PageTitle>로그인</PageTitle>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="이메일을 입력하세요" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="me-2">
              로그인
            </Button>
            <Button variant="secondary" href="/signup">
              회원가입
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signin;
