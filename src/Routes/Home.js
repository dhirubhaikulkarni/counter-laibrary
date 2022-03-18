import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';

import { Button, Row, Col, Container } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  

  componentDidMount() {}

  render() {
    
    return (

       
        <Container>
          <Row>
            <Col>
              <h1>Welcome Library Management ....</h1>
            </Col>
          </Row>
          <Row md="6" className="head">
            <Col>
              <Link to="/classexample">
                <Button variant="secondary">Class Example</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/functionexample">
                <Button variant="secondary">Function Example</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      
    );
  }
}

export default Home;
