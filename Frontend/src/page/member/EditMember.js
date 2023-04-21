import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const EditMember = () => {
  const history = useNavigate;
  const { id } = useParams();

  const [member, setMember] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    nickname: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: 회원 정보 업데이트 처리
    setShowAlert(true);
    setAlertMessage("회원 정보가 수정되었습니다.");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMember((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container>
      <PageTitle>회원 정보 수정</PageTitle>
      <Row>
        <Col>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formOldPassword">
              <Form.Label>기존 비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your old password"
                name="oldPassword"
                value={member.oldPassword}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
              <Form.Label>새로운 비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                value={member.newPassword}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>새로운 비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password again"
                name="confirmPassword"
                value={member.confirmPassword}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formNickname">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your nickname"
                name="nickname"
                value={member.nickname}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              회원 정보 변경
            </Button>
            <Button
              variant="secondary"
              className="ml-2"
              onClick={() => history(-1)}
            >
              취소
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditMember;
