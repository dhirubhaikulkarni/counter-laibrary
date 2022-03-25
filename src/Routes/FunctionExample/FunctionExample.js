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

  const [inputdata, setinputData] = useState("");
  const [inputDataCategory, setCategoryDropdowndata] = useState("");
  const [inputDataPublisher, setPublisherDropdowndata] = useState("");

  const [tesxtboxdata, settesxtboxdata] = useState("");
  const [dropcatData, setdropcatData] = useState("");
  const [doprpubData, setdoprpubData] = useState("");

  useEffect(() => {
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

  function handleClickDelete(BDID) {
    fetch("http://localhost:8080/api/BooksDetails/delete/" + BDID, {
      // axios.get('http://localhost:8080/api/BooksData/delete/'+BDID,{
      method: "GET",
    }).then((result) => {
      result.json().then((res) => {
        fetchPosts();
        //this.getBookData();
      });
    });
  }
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8080/api/BooksDetails");
    setPosts(res.data);
  };

  //search book
  const getData = (event) => {
    setinputData(event.target.value);
  };

  const getCategoryData = (event) => {
    setCategoryDropdowndata(event.target.value);
  };

  const getPublisherData = (event) => {
    setPublisherDropdowndata(event.target.value);
  };

  const handleSubmit = (i) => {
    i.preventDefault();
    if (inputdata) {
      axios
        .get(`http://localhost:8080/api/BooksDetails/Search/${inputdata}`)
        .then((res4) => {
          const searchData = res4.data;

          setPosts(searchData);
        });
    } else if (inputDataCategory) {
      axios
        .get(
          `http://localhost:8080/api/BooksDetails/Search1/${inputDataCategory}`
        )
        .then((res4) => {
          const searchData = res4.data;
          setPosts(searchData);
          setinputData("");
        });
    } else if (inputDataPublisher) {
      axios
        .get(
          `http://localhost:8080/api/BooksDetails/Search2/${inputDataPublisher}`
        )
        .then((res4) => {
          const searchData = res4.data;
          setPosts(searchData);
          setinputData("");
        });
    } else {
      alert(`required fileds`);
    }
  };
  const handlereset = (event) => {
    fetchPosts();
  };

  const allhandlesubmittext = (event) => {
    settesxtboxdata(event.target.value);
  };
  const allhandlesubmitcat = (event) => {
    setdropcatData(event.target.value);
  };
  const allhandlesubmitpub = (event) => {
    setdoprpubData(event.target.value);
  };

  const allinputhandlesubmit = () => {
    console.log(tesxtboxdata);
    console.log(dropcatData);
    console.log(doprpubData);

    const allDataCollection={
      Book: tesxtboxdata, 
      Cat: dropcatData,
      pub: doprpubData
    }

    axios
    .post("http://localhost:8080/api/BooksDetails/CombineSearch/",allDataCollection)
    
    .then((res4) => {
      const searchData = res4.data;
      console.log(searchData);
      setPosts(searchData);
     // setinputData("");
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
                // onChange={getData}
                
                onChange={allhandlesubmittext}
                required
              />
            </Form.Group>
          </Col>
          <Col className="md-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <div>
                <select
                  className="popup-input"
                  onChange={allhandlesubmitcat}
               
                >
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
                <select
                  className="popup-input"
                  onChange={allhandlesubmitpub}
                  
                >
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
                <Button onClick={allinputhandlesubmit}>Search</Button>
              </Form.Label>
            </Form.Group>
          </Col>
          <Col className="md-1">
            <Form.Group className="textbox" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Label>
                <Button type="reset" onClick={handlereset}>
                  Reset
                </Button>
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
      <FunctionBookGetList
        posts={posts}
        PassFunctionDelete={handleClickDelete}
      />
    </Container>
  );
}

export default FunctionExample;
