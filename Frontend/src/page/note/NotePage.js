import React from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import AddNoteModal from "./EditNoteModal";
import PageTitle from "../../component/PageTitle";

const NotePage = () => {
  return (
    <Container>
      <PageTitle>오답노트</PageTitle>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>문제 제목</th>
                <th>작성일</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>문제 1</td>
                <td>2023-04-21</td>
                <td>
                  <Button variant="primary">등록</Button>{" "}
                  <Button variant="warning">수정</Button>{" "}
                  <Button variant="danger">삭제</Button>
                </td>
              </tr>
              <tr>
                <td>문제 2</td>
                <td>2023-04-20</td>
                <td>
                  <Button variant="primary">등록</Button>{" "}
                  <Button variant="warning">수정</Button>{" "}
                  <Button variant="danger">삭제</Button>
                </td>
              </tr>
              <tr>
                <td>문제 3</td>
                <td>2023-04-19</td>
                <td>
                  <Button variant="primary">등록</Button>{" "}
                  <Button variant="warning">수정</Button>{" "}
                  <Button variant="danger">삭제</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* <AddNoteModal show={true} /> */}
    </Container>
  );
};

export default NotePage;
