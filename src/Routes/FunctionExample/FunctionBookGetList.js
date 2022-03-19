import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FunctionBookGetList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const ToShowBooksData = posts.map((info) => {
    return (
      <tr>
        <td key={info.BDID}>{info.BDID}</td>
        <td>{info.bookname}</td>
        <td>{info.Category.Name}</td>
        <td>{info.Publisher.Name}</td>
        <td>{info.quantity}</td>
        <td>{info.IsActive.toString()}</td>
        <td>
          <Link to={`/ClassEditBookExample/${info.BDID}`}>
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </Link>
        </td>
        <td>
        <i class="fa fa-trash"></i>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <Row>
        <Col md="8">
          <table id="Book-GetList" className="Book-GetList">
            <thead>
              <tr>
                <th>BookId</th>
                <th>BookName</th>
                <th>BookCategoryId</th>
                <th>PublisherId</th>
                <th>Quantity</th>
                <th>IsActive</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {/* {ToShowBooksData} */}
            {ToShowBooksData}
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionBookGetList;
