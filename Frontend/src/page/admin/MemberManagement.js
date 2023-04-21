import React, { useState } from "react";
import { Table, Button, Form, FormGroup } from "react-bootstrap";

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // function to fetch members from the server and update the state
  const fetchMembers = async () => {
    // try {
    //   const response = await fetch("/api/members");
    //   const data = await response.json();
    //   setMembers(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  // function to handle member search
  const handleSearch = async (event) => {
    event.preventDefault();
    // try {
    //   const response = await fetch(`/api/members?search=${searchTerm}`);
    //   const data = await response.json();
    //   setMembers(data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  // function to handle member deletion
  const handleDelete = async (memberId) => {
    // try {
    //   const response = await fetch(`/api/members/${memberId}`, {
    //     method: "DELETE",
    //   });
    //   if (response.ok) {
    //     fetchMembers();
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="container mt-5">
      <h1>Member List</h1>
      <hr />
      <Form onSubmit={handleSearch} inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Form.Control
            type="text"
            name="search"
            id="search"
            placeholder="Search members"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </FormGroup>
        <Button color="primary">Search</Button>
      </Form>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Nickname</th>
            <th>Email</th>
            <th>Subscription Date</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.nickname}</td>
              <td>{member.email}</td>
              <td>{new Date(member.subscriptionDate).toLocaleDateString()}</td>
              <td>{member.grade}</td>
              <td>
                <Button color="warning" className="mr-2">
                  Modify
                </Button>
                <Button color="danger" onClick={() => handleDelete(member.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="success">Add New Member</Button>
    </div>
  );
};

export default MemberManagement;
