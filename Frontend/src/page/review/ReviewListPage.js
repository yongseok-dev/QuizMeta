import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const ReviewListPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [answer, setAnswer] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"]; // Example categories
  const Quizs = [
    {
      id: 1,
      category: "Category 1",
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      category: "Category 2",
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest",
    },
    {
      id: 3,
      category: "Category 3",
      question: "What is the largest continent in the world?",
      answer: "Asia",
    },
    // more Quizs...
  ];

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = () => {
    // Check if the answer is correct
    const currentQuizObject = Quizs[currentQuiz];
    const isAnswerCorrect =
      answer.toLowerCase() === currentQuizObject.answer.toLowerCase();

    // TODO: Handle what happens when the user submits the answer

    // Move to the next Quiz
    setCurrentQuiz((prev) => prev + 1);
    setAnswer("");
  };

  const handleReviewComplete = () => {
    // TODO: Handle what happens when the user completes the review
  };

  const handleQuizDelete = () => {
    // TODO: Handle what happens when the user deletes a Quiz from the review
  };

  const handlePreviousQuiz = () => {
    setCurrentQuiz((prev) => prev - 1);
  };

  const handleNextQuiz = () => {
    setCurrentQuiz((prev) => prev + 1);
  };

  return (
    <Container>
      <PageTitle>리뷰 리스트</PageTitle>
      <Row>
        <Col>
          <Form.Group controlId="categorySelect">
            <Form.Label>Select a category:</Form.Label>
            <Form.Control as="select">
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <h3>{Quizs[currentQuiz].question}</h3>
          <Form.Group controlId="answerInput">
            <Form.Control
              type="text"
              placeholder="Enter your answer"
              value={answer}
              onChange={handleAnswerChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAnswerSubmit}>
            Submit Answer
          </Button>{" "}
          <Button variant="success" onClick={handleReviewComplete}>
            Review Complete
          </Button>{" "}
          <Button variant="danger" onClick={handleQuizDelete}>
            Delete Quiz
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={handlePreviousQuiz}
            disabled={currentQuiz === 0}
          >
            Previous Quiz
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={handleNextQuiz}
            disabled={currentQuiz === Quizs.length - 1}
          >
            Next Quiz
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewListPage;
