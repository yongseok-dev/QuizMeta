import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const QuizListPage = () => {
  // Define state variables for category selection and search query
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  // Define state variable for quiz data
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Quiz 1",
      author: "Author 1",
      category: "Category 1",
      solves: 10,
    },
    {
      id: 2,
      title: "Quiz 2",
      author: "Author 2",
      category: "Category 2",
      solves: 20,
    },
    {
      id: 3,
      title: "Quiz 3",
      author: "Author 3",
      category: "Category 1",
      solves: 5,
    },
    // ...more quizzes
  ]);

  // Define function to filter quizzes by category
  const filterByCategory = (quiz) => {
    if (!category) return true; // if no category selected, show all quizzes
    return quiz.category === category;
  };

  // Define function to filter quizzes by search query
  const filterByQuery = (quiz) => {
    if (!query) return true; // if no query entered, show all quizzes
    return (
      quiz.title.toLowerCase().includes(query.toLowerCase()) ||
      quiz.author.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Filter quizzes based on category and search query
  const filteredQuizzes = quizzes
    .filter(filterByCategory)
    .filter(filterByQuery);

  return (
    <Container>
      <PageTitle>퀴즈 리스트</PageTitle>
      <Row>
        <Col md={3}>
          <Form>
            <Form.Group controlId="categorySelect">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                {/* ...more categories */}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search quizzes by title or author"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="primary" id="searchButton">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Solves</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuizzes.map((quiz) => (
                <tr key={quiz.id}>
                  <td>{quiz.title}</td>
                  <td>{quiz.author}</td>
                  <td>{quiz.category}</td>
                  <td>{quiz.solves}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizListPage;
