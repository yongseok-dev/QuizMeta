import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const ReviewSetting = () => {
  const [nextReviewDate, setNextReviewDate] = useState("");
  const [reviewInterval, setReviewInterval] = useState("");
  const [reviewRepeatCount, setReviewRepeatCount] = useState("");
  const [memoryDifficultyCoefficient, setMemoryDifficultyCoefficient] =
    useState("");
  const [reviewProblems, setReviewProblems] = useState([]);

  const handleDeleteProblem = (index) => {
    const newReviewProblems = [...reviewProblems];
    newReviewProblems.splice(index, 1);
    setReviewProblems(newReviewProblems);
  };

  return (
    <Container>
      <PageTitle>리뷰 설정</PageTitle>
      <Row>
        <Col>
          <Row className="my-3">
            <Col>
              <h5>다음 복습 일시:</h5>
              <input
                type="datetime-local"
                className="form-control"
                value={nextReviewDate}
                onChange={(e) => setNextReviewDate(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h5>복습 간격:</h5>
              <input
                type="text"
                className="form-control"
                placeholder="일 단위"
                value={reviewInterval}
                onChange={(e) => setReviewInterval(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h5>복습 반복 횟수:</h5>
              <input
                type="text"
                className="form-control"
                value={reviewRepeatCount}
                onChange={(e) => setReviewRepeatCount(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h5>기억 난이도 계수:</h5>
              <input
                type="text"
                className="form-control"
                value={memoryDifficultyCoefficient}
                onChange={(e) => setMemoryDifficultyCoefficient(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <h5>복습 문제 리스트:</h5>
              <ul>
                {reviewProblems.map((problem, index) => (
                  <li key={index}>
                    {problem.title} - {problem.type}{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      className="ml-3"
                      onClick={() => handleDeleteProblem(index)}
                    >
                      삭제
                    </Button>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button variant="primary" className="mr-3">
                문제 추가
              </Button>
              <Button variant="danger">저장</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSetting;
