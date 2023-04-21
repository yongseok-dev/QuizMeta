import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Form, Col, Row } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const QuizDetailPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { id } = useParams();

  // 모의 데이터
  const quizData = {
    id: 1,
    title: "퀴즈 제목",
    type: "객관식",
    content: "퀴즈 내용",
    options: ["보기 1", "보기 2", "보기 3", "보기 4"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제출 처리
    console.log("제출:", selectedOption);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container>
      <PageTitle>퀴즈 상세보기</PageTitle>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{quizData.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {quizData.type}
              </Card.Subtitle>
              <Card.Text>{quizData.content}</Card.Text>
              <Form onSubmit={handleSubmit}>
                {quizData.options.map((option, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    name="option"
                    label={option}
                    value={option}
                    onChange={handleOptionChange}
                  />
                ))}
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!selectedOption}
                >
                  제출
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizDetailPage;
