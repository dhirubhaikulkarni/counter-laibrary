import React from "react";
import "./ClassGetList.css";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import "./popups.css";
const popupS = require("popups");

class ClassGetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ref = (BDID) => {
      console.log("ref");
      this.props.PassFunctionDelete(BDID);
    };

    function handleGetFunctionDelete(BDID) {
      popupS.confirm({
        content: "<b>Are you Sure you want to Delete The Book</b>",
        labelOk: "Yes",
        labelCancel: "No",
        onSubmit: function () {
          ref(BDID);
        },
        onClose: function () {
          console.log(":(");
        },
      });
    }

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
            <Link to={`/ClassEditBookExample/${info.BDID}`}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </td>

          <td>
            <Button onClick={() => handleGetFunctionDelete(info.BDID)}>
              Comfirm
            </Button>
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
            <Link to={`/ClassEditCategoryExample/${category.categoryid}`}>
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </td>
          <td>
            <i class="fa fa-trash"></i>
          </td>
          {/* <td>
          <Link  to="/functionexample/" >Back</Link>
          </td> */}
        </tr>
      );
    });

    const ToShowPublishersData = PassPublishersData.map((publisher) => {
      return (
        <tr>
          <td key={publisher._id}>{publisher.publisherid}</td>
          <td>{publisher.Name} </td>
          <td>
            <Link to={`/ClassEditPublisherExample/${publisher.publisherid}`}>
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
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Link to="/addbook">
                <Button variant="success">Add Book</Button>
              </Link>
            </Col>
            <Col md="4">
              <Link to="/addcategory">
                <Button variant="success">Add Category</Button>
              </Link>
            </Col>
            <Col md="4">
              <Link to="/addpublisher">
                <Button variant="success">Add Publisher</Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="12">
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
            <Col md="12">
              <table id="Book-GetList" className="Book-GetList">
                <thead>
                  <tr>
                    <th>BookCategoryId</th>
                    <th>CategoryType</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                {ToShowCategoriesData}
              </table>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <table id="Book-GetList" className="Book-GetList">
                <thead>
                  <tr>
                    <th>PublisherId</th>
                    <th>PublisherName</th>
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
