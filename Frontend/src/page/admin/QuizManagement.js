import { useState } from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import PageTitle from "../../component/PageTitle";

const QuizManagement = () => {
  const [Quizs, setQuizs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch Quizs from API and set to state
  const fetchQuizs = async () => {
    // try {
    //   const response = await fetch('/api/Quizs');
    //   const data = await response.json();
    //   setQuizs(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter Quizs based on search term
  const filteredQuizs = Quizs.filter(
    (Quiz) =>
      Quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Quiz.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort Quizs by ID in ascending order
  const sortedQuizs = filteredQuizs.sort((a, b) => a.id - b.id);

  return (
    <Container>
      <PageTitle>문항 관리</PageTitle>
      <Row>
        <Col>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title or category"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedQuizs.map((Quiz) => (
                <tr key={Quiz.id}>
                  <td>{Quiz.id}</td>
                  <td>{Quiz.title}</td>
                  <td>{Quiz.category}</td>
                  <td>{Quiz.difficulty}</td>
                  <td>
                    <Button variant="primary" href={`/admin/Quizs/${Quiz.id}`}>
                      Edit
                    </Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="success" href="/admin/Quizs/new">
            Add Quiz
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizManagement;
