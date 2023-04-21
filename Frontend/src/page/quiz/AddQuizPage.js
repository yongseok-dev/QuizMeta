import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const AddQuizPage = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("multiple_choice");
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Label for="title">Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Form.Label for="type">Type</Form.Label>
        <Form.Control
          type="select"
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          {/* <option value="multiple_choice">Multiple Choice</option>
          <option value="short_answer">Short Answer</option>
          <option value="essay">Essay</option> */}
        </Form.Control>
      </FormGroup>
      <FormGroup>
        <Form.Label for="content">Content</Form.Label>
        <Form.Control
          type="textarea"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Form.Label for="answer">Answer</Form.Label>
        <Form.Control
          type="text"
          name="answer"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </FormGroup>
      {type === "multiple_choice" && (
        <FormGroup>
          <Form.Label for="options">Options</Form.Label>
          {options.map((option, index) => (
            <div key={index}>
              <Form.Control
                type="text"
                name={`option-${index}`}
                id={`option-${index}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
              <Form.Control
                type="radio"
                name="correct-answer"
                id={`correct-answer-${index}`}
                checked={answer === option}
                onChange={(e) => setAnswer(e.target.value)}
                value={option}
                required
              />
              <Form.Label for={`correct-answer-${index}`}>
                Correct Answer
              </Form.Label>
            </div>
          ))}
          <Button
            color="primary"
            onClick={() => setOptions([...options, ""])}
            style={{ marginBottom: "1rem" }}
          >
            Add Option
          </Button>
        </FormGroup>
      )}
      <FormGroup>
        <Form.Label for="category">Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddQuizPage;
