import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FunctionBookSearchPanel.css";

function FunctionBookSearchPanel() {
  let navigate = useNavigate();
  const [Categorydata, setCategorydata] = useState([]);
  const [Publisherdata, setPublisherdata] = useState([]);
  const [values,setvalue] = useState('');
  const [data,setdata] = useState('');


  const isAvailabledata = data;
  console.log(isAvailabledata);

  useEffect(() => {
    if (isAvailabledata) {
      axios
        .get(`http://localhost:8080/api/SearchBook/${data}`)
        .then((res1) => {
          const searchbookdetail = res1.data;
          //console.log(searchbookdetail);
        });
    }
    
  });


  //  Fetching Category and Publisher Data For Dropdown
  useEffect(() => {
    axios.get(`http://localhost:8080/api/CategoryDetails`).then((res1) => {
      const categorydata = res1.data;
      setCategorydata(categorydata);
    });

    axios.get(`http://localhost:8080/api/PublisherDetails`).then((res1) => {
      const publisherdata = res1.data;
      setPublisherdata(publisherdata);
    });
  }, []);

  
  const getData = (event) => {
   setvalue( event.target.value);
  }

  const passData = (item) => {
    setdata( item.data = values);
    item.preventDefault();
  }
  // console.log(data)

  return (
    <Container>
      <Row>
        <Col md="10">
          <h4>
            <label>Search Panel For Book</label>
          </h4>
        </Col>
        <Col md="2">
          <Button
            onClick={() => {
              navigate("/functionexample");
            }}
          >
            Back
          </Button>
        </Col>
      </Row>
      <Form className="AddBook-popup">
        <Row>
          <Col className="md-3">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                name="Bookname"
                type="text"
                placeholder="Enter Book Name"
                value={values} 
                onChange={getData}
              />
            </Form.Group>
          </Col>
          {/* <Col className="md-3">
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
          </Col> */}

          <Col className="md-3">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Label>
                <Button  onClick={passData}>Search</Button>
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default FunctionBookSearchPanel;
