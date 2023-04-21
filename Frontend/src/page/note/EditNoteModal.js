import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function AddNoteModal(props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [note, setNote] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send note data to server and close modal
    // ...

    // Clear form inputs
    setTitle("");
    setType("");
    setNote("");

    // Close modal
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title or Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter problem title or number"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="">Select problem type</option>
              <option value="multiple_choice">Multiple Choice</option>
              <option value="short_answer">Short Answer</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="note">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default AddNoteModal;
