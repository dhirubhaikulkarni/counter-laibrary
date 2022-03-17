import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <h1>Welcome to React</h1>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Link to="/classexample">
                <Button variant="success">Class Example</Button>
              </Link>
            </Col>
            <Col md="2">
              <Link to="/functionexample">
                <Button variant="success">Function Example</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      
    );
  }
}

export default Home;
