import { Container, Button } from "react-bootstrap";

function Main() {
  return (
    <div>
      <Container>
        <h1>Welcome!</h1>
        <p>QuizMeta에 오신것을 환영합니다.</p>
        <p>
          <Button variant="primary">시작하기</Button>
        </p>
      </Container>
      <Container>
        <h2>QuizMeta</h2>
        <p>
          퀴즈 메타는 간단한 문제 출제와 복습 기능을 제공하는 웹
          어플리케이션입니다. 새로운 문제를 출제하고 풀어보세요. 출제된 문제는
          복습을 통해 재확인이 가능합니다. 문제 출제와 복습을 통해 스스로
          성장하세요.
        </p>
      </Container>
    </div>
  );
}

export default Main;
