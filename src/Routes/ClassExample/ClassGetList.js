import React from "react";
import "./ClassGetList.css";
import {Link} from 'react-router-dom';
import { Button, Row, Col, Container } from "react-bootstrap";

class ClassGetList extends React.Component {
  render() {
    const handleGetFunctionDelete = (BDID) => {
      console.log("In on trigger function");
      console.log(BDID);
      this.props.PassFunctionDelete(BDID);
      
    };
    const { PassBookData, PassCategoryData, PassPublishersData } = this.props;

    const ToShowBooksData = PassBookData.map((info) => {
      return (
        <tr>
          <td key={info.BDID}>{info.BDID}</td>
          <td>{info.bookname}</td>
          <td>{info.Category.Name}</td>
          <td>{info.Publisher.Name}</td>
          <td>{info.quantity}</td>
          <td>{info.IsActive.toString()}</td>
          <td>
          <Link  to={`/ClassEditBookExample/${info.BDID}`}>Edit </Link>
          </td>
         <td>
         <Button onClick={() => handleGetFunctionDelete(info.BDID)}>Delete</Button>
         </td>
        </tr>
      );
    });

    const ToShowCategoriesData = PassCategoryData.map((category) => {
      return (
        <tr>
          <td key={category._id}>{category.categoryid}</td>
          <td>{category.Name} </td>
          <td>
            <input type="button" value="Edit" />
          </td>
          <td>
            <input type="button" value="Delete" />
          </td>
          <td>
          <Link  to="/functionexample/" >Edit</Link>
          </td>
        </tr>
      );
    });

    const ToShowPublishersData = PassPublishersData.map((publisher) => {
      return (
        <tr>
          <td key={publisher._id}>{publisher.publsiherid}</td>
          <td>{publisher.Name} </td>
          <td>
            <input type="button" value="Edit" />
          </td>
          <td>
            <input type="button" value="Delete" />
          </td>
          <td>
          <Link  to="/functionexample/" >Edit</Link>
          </td>
        </tr>
      );
    });


    return (
      <div>

<Container>
        <Row>
            <Col md="10">
              <h3>BookList Details </h3>
            </Col>
            <Col md="2">
              <Link  to="/addbook" >
                  <Button variant="success">
                      Add Book
                  </Button>
              </Link>
            </Col>
        </Row>
        <Row>
          <Col>
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
        <Row>
          <Col>
          <table id="Book-GetList" className="Book-GetList">
            <thead>
              <tr>
                <th>BookCategoryId</th>
                <th>CategoryType</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {ToShowCategoriesData}
          </table>
          </Col>
        </Row>
        <Row>
          <Col>
          <table id="Book-GetList" className="Book-GetList">
            <thead>
              <tr>
                <th>PublisherId</th>
                <th>PublisherName</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {ToShowPublishersData}
          </table>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default ClassGetList;
