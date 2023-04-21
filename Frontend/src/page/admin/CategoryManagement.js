import React from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const categoryData = [
  { id: 1, name: "Programming" },
  { id: 2, name: "Mathematics" },
  { id: 3, name: "Science" },
  { id: 4, name: "History" },
];

class CategoryManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      categoryName: "",
      categories: categoryData,
    };
  }

  handleAddCategory = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleChange = (e) => {
    this.setState({ categoryName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      id: this.state.categories.length + 1,
      name: this.state.categoryName,
    };
    const updatedCategories = [...this.state.categories, newCategory];
    this.setState({ categories: updatedCategories, showModal: false });
  };

  handleEdit = (id) => {
    const categories = [...this.state.categories];
    const category = categories.find((category) => category.id === id);
    category.name = prompt("Enter new category name:", category.name);
    this.setState({ categories });
  };

  handleDelete = (id) => {
    const categories = this.state.categories.filter(
      (category) => category.id !== id
    );
    this.setState({ categories });
  };

  render() {
    return (
      <div>
        <h1>Category List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => this.handleEdit(category.id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => this.handleDelete(category.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={this.handleAddCategory}>
          Add Category
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  value={this.state.categoryName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>{" "}
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CategoryManagement;
