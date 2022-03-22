import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import FunctionBookGetList from "./FunctionBookGetList";

function FunctionExample() {
  let navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const [Categorydata, setCategorydata] = useState([]);
  const [Publisherdata, setPublisherdata] = useState([]);
  const [inputdata, setInputdata] = useState([]);


  // function handleClickDelete (BDID) {
  //   fetch("http://localhost:8080/api/BooksDetails/delete/" + BDID, {
  //   // axios.get('http://localhost:8080/api/BooksData/delete/'+BDID,{
  //     method: "GET",
  //   }).then((result) => {
  //     result.json().then((res) => {
        
  //       //this.getBookData();
  //     });
  //   });
  // };
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/BooksDetails");
      setPosts(res.data);
    };

    fetchPosts();

//categorydata
    axios.get(`http://localhost:8080/api/CategoryDetails`).then((res1) => {
      const categorydata = res1.data;
      setCategorydata(categorydata);
    });
// publisherdata
    axios.get(`http://localhost:8080/api/PublisherDetails`).then((res1) => {
      const publisherdata = res1.data;
      setPublisherdata(publisherdata);
    });

  }, []);

  //search book
  const getData = (event) => {
    setInputdata(event.target.value);
  };

  const passData = (i) => {
    i.preventDefault();
    console.log(inputdata);
    axios
      .get(`http://localhost:8080/api/SearchBook/${inputdata}`)
      .then((res1) => {
        const searchbookdetail = res1.data;
        setPosts(searchbookdetail);
      });
  };

  return (
    <Container>
      
      <Form className="AddBook-popup">
        <Row>
          <Col className="md-3">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                name="Bookname"
                type="text"
                placeholder="Enter Book Name"
                onChange={getData}
              />
            </Form.Group>
          </Col>
          <Col className="md-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <div>
          <select className="popup-input" >
            {Categorydata.map((item) => (
              <option>{item.Name}</option>
            ))}
          </select>
        </div>
      </Form.Group>
        </Col>
        <Col className="md-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Publisher Name</Form.Label>
        <div>
          <select className="popup-input" >
            {Publisherdata.map((item) => (
              <option>{item.Name}</option>
            ))}
          </select>
        </div>
      </Form.Group>
        </Col>

          <Col className="md-1">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Label>
                <Button onClick={passData}>Search</Button>
              </Form.Label>
            </Form.Group>
          </Col>
          <Col className="md-1">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Label>
                <Button type = "reset">Reset</Button>
              </Form.Label>
            </Form.Group>
          </Col>
          <Col className="md-1">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Label>
                <Button
                  onClick={() => {
                    navigate("/functionexample");
                  }}
                >
                  Back
                </Button>
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <h1 className="text-primary mb-4">Book Getlist</h1>
      <FunctionBookGetList posts={posts}  />
      {/* PassFunctionDelete={handleClickDelete} */}
    </Container>
  );
}

export default FunctionExample;
