import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const FunctionPagination = ({ postsPerPage, totalPosts, paginate,pagenumber }) => {
  const pageNumbers = [];

  const totalpagecount = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= totalpagecount; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Row>
        <Col md="12">
          <Button
            disabled={pagenumber <= 1}
            onClick={() => {
              paginate(pagenumber - 1);
            }}
            href="#"
          >
            Previous
          </Button>

          {pageNumbers.map((number) => (
            <Button
              key={number}
              className="page-item"
              onClick={() => paginate(number)}
              href="#"
            >
              {number}
            </Button>
          ))}

          <Button
            disabled={pagenumber >= totalpagecount}
            onClick={() => {
              paginate(pagenumber + 1);
            }}
            href="#"
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionPagination;
