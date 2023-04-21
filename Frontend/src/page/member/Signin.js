import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Signin() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">로그인</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
        </Form.Group>
        <Button variant="primary" type="submit" className="me-2">
          로그인
        </Button>
        <Button variant="secondary" href="/signup">
          회원가입
        </Button>
      </Form>
    </Container>
  );
}

export default Signin;
