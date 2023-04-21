import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원 가입 정보를 서버로 전송하는 코드 작성
    console.log("submit");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">회원 가입</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNickname">
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            type="text"
            placeholder="사용하실 닉네임을 입력하세요"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          회원 가입
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
