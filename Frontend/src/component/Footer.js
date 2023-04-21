import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>© 2023 QuizMeta. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Designed by{" "}
              <a href="https://github.com/yongseok-dev">yongseok-dev</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
